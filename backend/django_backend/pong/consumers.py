import json
from channels.generic.websocket import AsyncWebsocketConsumer
from pong.pong_game import Pong, Player, CreateGameThread

class GameConsumer(AsyncWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        self.player = None
        self.thread = None
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

        # Add game to thread pool
        if self.game_room not in CreateGameThread.threads:
            CreateGameThread.create_game(self.game_room)

        self.thread = CreateGameThread.threads[self.game_room]
        self.pong_game: Pong = CreateGameThread.games[self.game_room]

        # Socket stuff
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        if not self.pong_game.channel_layer:
            self.pong_game.add_channel_layer(self.channel_layer)
        if not self.pong_game.room_group_name:
            self.pong_game.add_room_group_name(self.room_group_name)
        if not self.pong_game.thread:
            self.pong_game.add_thread(self.thread)
        # Add player to game
        if not self.pong_game.player1:
            self.player = Player(1, "Player 1")
            self.pong_game.add_player(self.player)
            self.thread["player1"] = True
        elif not self.pong_game.player2:
            self.player = Player(2, "Player 2")
            self.pong_game.add_player(self.player)
            self.thread["player2"] = True


        if self.thread["player1"] and self.thread["player2"]:
                CreateGameThread.start_game(self.game_room)
                #self.pong_game.start_game()

        print (f"Connected to {self.room_group_name}", flush=True)
        await self.accept()


    async def disconnect(self, close_code):
        print("Disconnected", flush=True)
        await CreateGameThread.stop_game(self.game_room)
        # Leave room group
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    async def receive(self, text_data):
        json_data = json.loads(text_data)
        cmd = json_data.get("cmd")
        if (cmd == "move"):
            self.player.move(json_data.get("action"))
        elif (cmd == "stop"):
            CreateGameThread.stop_game(self.game_room)
            # self.pong_game.stop_game()
        elif (cmd == "start"):
            CreateGameThread.start_game(self.game_room)
            # self.pong_game.start_game()

        # await self.channel_layer.group_send(
		# 	self.room_group_name, {"type": "send_test", "state": "self.state"}
		# )


    # Receive message from room group
    async def game_state(self, event):
        state = event["state"]
        # Send message to WebSocket
        await self.send(text_data=json.dumps(state))

    # async def send_test(self, event):
    #     await self.send(text_data=json.dumps({"message": "Test"}))
