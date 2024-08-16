import json
from channels.generic.websocket import AsyncWebsocketConsumer

from .tournament.tournament import Tournament
from .tournament.tournaments import Tournaments


from pong.signals import match_completed

class TournamentConsumer(AsyncWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        self.room_group_name = None
        self.tournament = None
        super().__init__(*args, **kwargs)


    # User cpmmects to a tournament room
    async def connect(self):
        #print("Connected to tournament room", flush=True)

        # Check if user is authenticated
        user = self.scope['user']
        print(f"tournaments:consumers.py:connect:User: {user}", flush=True)
        if not user.is_authenticated:
            print("tournaments:consumers.py:connect:User not authenticated", flush=True)
            return await self.close()

        # Get tournament id from the url
        try:
            self.tournament_id = self.scope["url_route"]["kwargs"]["tournament_id"]
            #print(f"tournament_id: {self.tournament_id}", flush=True)
        except Exception as e:
            #print(f"Error getting tournament_id: {e}", flush=True)
            return await self.close()

        # Create tournament instance if it does not exist
        if not self.tournament_id in Tournaments.tournaments:
            if not await Tournaments.create_tournament(self.tournament_id):
                #print(f"Error creating tournament {self.tournament_id}", flush=True)
                return await self.close()
        self.tournament: Tournament = Tournaments.tournaments[self.tournament_id]
        #print(f"tournament {self.tournament}", flush=True)
        if self.tournament.status != "open":
            return await self.close()

        # Add user to tournament as participant
        self.participant = await self.tournament.add_participant(user.id, self.channel_name, self.channel_layer)
        if not self.participant:
            return await self.close()
        #print(f"{self.participant.id} participant {self.participant}", flush=True)
        # print (f"{user.username} connected to {self.participant.channel_name}", flush=True)
        await self.accept()


    async def disconnect(self, close_code):
        #print(f"disconnected from room {self.room_group_name}", flush=True)
        # Only remove participants if the tournamnet has not started
        if self.tournament and self.tournament.status == "open":
            await self.tournament.remove_participant(self.participant.id)
        if self.room_group_name:
            await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    async def receive(self, text_data):
        try:
            json_data = json.loads(text_data)
            cmd = json_data.get("cmd")
            # cmd_args = json_data.get("cmd_args")
        except:
            #print("Invalid command", flush=True)
            return
        case = {
            "start": self.start
        }
        await case[cmd](tournament_id=self.tournament_id)

    async def start(self, tournament_id):
        if self.tournament.status != "open":
            return
        if len(self.tournament.participants) == 4:
            print("Coño", flush=True)
            await Tournaments.start_tournament(tournament_id=tournament_id)


    async def broadcast_message(self, event):
        # Send message to WebSocket
        await self.send(text_data=json.dumps(event.get("msg")))

