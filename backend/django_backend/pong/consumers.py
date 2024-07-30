import json
from channels.generic.websocket import AsyncWebsocketConsumer
from pong.pong_game import Pong, Player, Games
from rooms.models import Room
from user.models import User
from channels.db import database_sync_to_async

class GameConsumer(AsyncWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        self.player = None
        self.pong_game: Pong = None
        self.user = None
        self.room = None
        super().__init__(*args, **kwargs)


    async def connect(self):
        self.game_room_id = self.scope["url_route"]["kwargs"]["room_id"]
        self.user = self.scope["user"]

        # Retrieve the Room instance
        try:
            self.room = await self.get_room(self.game_room_id)
        except Room.DoesNotExist:
            await self.close()
            return

        # Check if the user is part of the room
        if not await self.is_user_in_room(self.user, self.room):
            await self.close()
            return

        self.room_group_name = f"game_{self.game_room_id}"

        # Add game to games
        if self.game_room_id not in Games.games:
            Games.create_game(self.game_room_id)

        self.pong_game = Games.games[self.game_room_id]

        # Socket stuff
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        if not self.pong_game.channel_layer:
            self.pong_game.add_channel_layer(self.channel_layer)
        if not self.pong_game.room_group_name:
            self.pong_game.add_room_group_name(self.room_group_name)

        # Add player to game
        if not self.pong_game.player1:
            self.player = Player(1, self.user.username)
            self.pong_game.add_player(self.player)
        elif not self.pong_game.player2:
            self.player = Player(2, self.user.username)
            self.pong_game.add_player(self.player)

        if self.pong_game.player1 and self.pong_game.player2:
            Games.start_game(self.game_room_id)

        print(f"Connected to {self.room_group_name} as {self.user.username}", flush=True)
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

    @database_sync_to_async
    def get_room(self, room_id):
        return Room.objects.get(id=room_id)
   
    @database_sync_to_async
    def is_user_in_room(self, user, room):
        return room.users.filter(id=user.id).exists()

