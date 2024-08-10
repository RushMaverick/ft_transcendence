import json
from channels.generic.websocket import AsyncWebsocketConsumer
from pong.pong_game import Pong, Player, Games
from urllib.parse import urlparse, parse_qs
from match.models import Match
from match.serializers import MatchSerializer
from asgiref.sync import sync_to_async
from rooms.models import Room
from user.models import User
from channels.db import database_sync_to_async

@database_sync_to_async
def get_room(room_id):
    return Room.objects.get(id=room_id)

@database_sync_to_async
def is_user_in_room(user, room):
    return room.users.filter(id=user.id).exists()

@sync_to_async
def get_match(match_id):
    match = MatchSerializer(Match.objects.get(id=match_id)).data
    return match

@sync_to_async
def get_match_instance(match_id):
    return Match.objects.get(id=match_id)

@sync_to_async
def create_match(player1_id: int, player2_id: int):
    print("create_match", flush=True)
    match_serializer = MatchSerializer(data={
        "player1": player1_id,
        "player2": player2_id,
        "player1_score": 0,
        "player2_score": 0,
    })
    if not match_serializer.is_valid():
        print(match_serializer.errors, flush=True)
        return None
    match_serializer.save()
    return match_serializer.data["id"]

def player_in_match(match, player_id):
    if match.get("player1").get("id") == player_id:
        return 1
    elif match.get("player2").get("id") == player_id:
        return 2
    else:
        return None

class GameConsumer(AsyncWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        self.player = None
        self.pong_game: Pong = None
        self.match_id = None
        self.room = None
        self.tournament_match = False
        super().__init__(*args, **kwargs)

    async def connect(self):
        user = self.scope['user']
        print(f"pong:connect:User: {user}", flush=True)
        if not user.is_authenticated:
            print("pong:connect:User not authenticated", flush=True)
            return await self.close()

        self.game_room = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = f"game_{self.game_room}"


        # Check if match_id is in query string
        try:
            query_string = self.scope['query_string'].decode("utf-8")

            query_params = parse_qs(urlparse(query_string).path)
            self.match_id = query_params.get('match_id', [None])[0]
            if self.match_id != None:
                print(f"pong:connect:match_id: {self.match_id}", flush=True)
                self.match = await get_match(self.match_id)
                print(f"pong:connect:match: {self.match}", flush=True)
                print(f"pong:connect:player_in_match: {player_in_match(self.match, user.id)}", flush=True)
                if not self.match or not player_in_match(self.match, user.id):
                    print("pong:connect:Player not in match", flush=True)
                    return await self.close()
                print(f"pong:connect:match_id: {self.match_id}", flush=True)
                self.tournament_match = True
        except Exception as e:
            pass

        #Room api stuff
        if not self.tournament_match:
            try:
                room_id = int(self.game_room.split('_')[-1])
                self.room = await get_room(room_id)
            except Room.DoesNotExist:
                print(f"pong:connect:Invalid room ID or room does not exist: {self.game_room}", flush=True)
                await self.close()
                return

            # Check if the user is part of the room
            if not await is_user_in_room(user, self.room):
                print(f"pong:connect:User {user} is not part of the room {self.room.id}", flush=True)
                await self.close()
                return
            
    
        # Create game if it doesn't exist
        if self.game_room not in Games.games:
            Games.create_game(self.game_room)
        self.pong_game = Games.games[self.game_room]

        # check if game is full
        if self.pong_game.player1 and self.pong_game.player2:
            print("pong:connect:Game is full", flush=True)
            return await self.close()

        # Add player to the game
        if not self.tournament_match:
            if not self.pong_game.player1:
                self.player = Player(1, user)
                self.pong_game.player1 = self.player
            elif not self.pong_game.player2:
                self.player = Player(2, user)
                self.pong_game.player2 = self.player

        else:
            if user.id == self.match.get("player1").get("id"):
                self.player = Player(1, user)
                self.pong_game.player1 = self.player
            elif user.id == self.match.get("player2").get("id"):
                self.player = Player(2, user)
                self.pong_game.player2 = self.player

        self.pong_game.player_consumers.append(self)

        # Socket stuff
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        if not self.pong_game.channel_layer:
            self.pong_game.channel_layer = self.channel_layer
        if not self.pong_game.room_group_name:
            self.pong_game.room_group_name = self.room_group_name


        # Start game if both players are in
        if self.pong_game.player1 and self.pong_game.player2:
                if not self.tournament_match:
                    self.match_id = await create_match(self.pong_game.player1.user.id, self.pong_game.player2.user.id)
                else:
                    self.pong_game.tournament_match = True
                self.pong_game.match_id = self.match_id
                self.pong_game.match_instance = await get_match_instance(self.match_id)
                Games.start_game(self.game_room)

        print (f"pong:connect:Connected to {self.room_group_name}", flush=True)
        await self.accept()



    async def disconnect(self, close_code):
        print("pong:disconnect:close_code: ", close_code, flush=True)
        print(f"pong:disconnect:{self.player.id} disconnected from room {self.game_room}", flush=True)
        # Check if game status is ongoing if it is then save_match(winner_id)
        if self.pong_game.active:
            self.pong_game.surrender(player_id=self.player.id)

        Games.remove_game(self.game_room)

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
            Games.remove_game(self.game_room)
        elif (cmd == "start"):
            Games.start_game(self.game_room)


    async def game_state(self, event):
        state = event["state"]
        # Send message to WebSocket
        await self.send(text_data=json.dumps(state))

