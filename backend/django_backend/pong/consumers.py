import json
from channels.generic.websocket import AsyncWebsocketConsumer
from pong.pong_game import Pong, Player, Games

class GameConsumer(AsyncWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        self.player = None
        self.pong_game: Pong = None
        super().__init__(*args, **kwargs)


    async def connect(self):
        user = self.scope['user']
        print(f"User: {user}")
        if not user.is_authenticated:
            print("User not authenticated")
            await self.close()

        #Todo: make a new thread for each game
        self.game_room = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = f"game_{self.game_room}"

        # Add game to games
        if self.game_room not in Games.games:
            Games.create_game(self.game_room)

        self.pong_game = Games.games[self.game_room]

        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        if not self.pong_game.channel_layer:
            self.pong_game.add_channel_layer(self.channel_layer)

        if not self.pong_game.room_group_name:
            self.pong_game.add_room_group_name(self.room_group_name)

        # Add player to game
        if not self.pong_game.player1:
            self.player = Player(1, "Player 1")
            self.pong_game.add_player(self.player)
        elif not self.pong_game.player2:
            self.player = Player(2, "Player 2")
            self.pong_game.add_player(self.player)

        if self.pong_game.player1 and self.pong_game.player2:
                Games.start_game(self.game_room)

        print (f"Connected to {self.room_group_name}")
        await self.accept()


    async def disconnect(self, close_code):
        print(f"{self.player.name} disconnected from room {self.game_room}", flush=True)
        Games.stop_game(self.game_room)
        # Leave room group
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)


    async def receive(self, text_data):
        try:
            json_data = json.loads(text_data)
            cmd = json_data.get("cmd")
            cmd_args = json_data.get("cmd_args")
        except:
            print("Invalid command", flush=True)
            return
        if (cmd == "move"):
            self.player.move(cmd_args)
        elif (cmd == "stop"):
            Games.stop_game(self.game_room)
        elif (cmd == "start"):
            Games.start_game(self.game_room)


    async def game_state(self, event):
        state = event["state"]
        # Send message to WebSocket
        await self.send(text_data=json.dumps(state))

