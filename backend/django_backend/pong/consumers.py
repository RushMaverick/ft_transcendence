import json
from channels.generic.websocket import AsyncWebsocketConsumer
from pong.pong_game import Pong, Player, Games

class GameConsumer(AsyncWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        self.player = None
        self.pong_game: Pong = None
        super().__init__(*args, **kwargs)


    async def connect(self):
        # user = self.scope['user']
        # print(f"User: {user}")
        # if not user.is_authenticated:
        #     print("User not authenticated")
        #     await self.close()

        self.game_room = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = f"game_{self.game_room}"

        # Add game to games
        if self.game_room not in Games.games:
            Games.create_game(self.game_room)

        self.pong_game = Games.games[self.game_room]

        # Socket stuff
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        if not self.pong_game.channel_layer:
            self.pong_game.add_channel_layer(self.channel_layer)
        if not self.pong_game.room_group_name:
            self.pong_game.add_room_group_name(self.room_group_name)
<<<<<<< HEAD
        if not self.pong_game.thread:
            self.pong_game.add_thread(self.thread)
=======

>>>>>>> b65036b82abc2b7e58ff53b013dddd57fd477e04
        # Add player to game
        if not self.pong_game.player1:
            self.player = Player(1, "Player 1")
            self.pong_game.add_player(self.player)
        elif not self.pong_game.player2:
            self.player = Player(2, "Player 2")
            self.pong_game.add_player(self.player)

<<<<<<< HEAD

        if self.thread["player1"] and self.thread["player2"]:
                CreateGameThread.start_game(self.game_room)
                #self.pong_game.start_game()
=======
        if self.pong_game.player1 and self.pong_game.player2:
                Games.start_game(self.game_room)
>>>>>>> b65036b82abc2b7e58ff53b013dddd57fd477e04

        print (f"Connected to {self.room_group_name}", flush=True)
        await self.accept()


    async def disconnect(self, close_code):
<<<<<<< HEAD
        print("Disconnected", flush=True)
        await CreateGameThread.stop_game(self.game_room)
=======
        print(f"{self.player.name} disconnected from room {self.game_room}", flush=True)
        Games.stop_game(self.game_room)
>>>>>>> b65036b82abc2b7e58ff53b013dddd57fd477e04
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
<<<<<<< HEAD
            CreateGameThread.stop_game(self.game_room)
            # self.pong_game.stop_game()
        elif (cmd == "start"):
            CreateGameThread.start_game(self.game_room)
            # self.pong_game.start_game()

        # await self.channel_layer.group_send(
		# 	self.room_group_name, {"type": "send_test", "state": "self.state"}
		# )
=======
            Games.stop_game(self.game_room)
        elif (cmd == "start"):
            Games.start_game(self.game_room)
>>>>>>> b65036b82abc2b7e58ff53b013dddd57fd477e04


    async def game_state(self, event):
        state = event["state"]
        # Send message to WebSocket
        await self.send(text_data=json.dumps(state))

<<<<<<< HEAD
    # async def send_test(self, event):
    #     await self.send(text_data=json.dumps({"message": "Test"}))
=======
>>>>>>> b65036b82abc2b7e58ff53b013dddd57fd477e04
