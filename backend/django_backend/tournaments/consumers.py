import json
from channels.generic.websocket import AsyncWebsocketConsumer


# from tournaments.serializers import TournamentSerializer, RoundSerializer, ParticipantSerializer
# from match.serializers import MatchSerializer
# from asgiref.sync import sync_to_async

# from tournaments.models import Tournament, Round, Participant

from .helpers.TournamentConsumerHelpers import create_match, create_round, get_tournament, add_participant, get_participants, remove_participant
from .tournament.tournament import Tournament
from .tournament.tournaments import Tournaments

class TournamentConsumer(AsyncWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        self.room_group_name = None
        super().__init__(*args, **kwargs)


    # User cpmmects to a tournament room
    async def connect(self):
        print("Connected to tournament room", flush=True)

        # Check if user is authenticated
        user = self.scope['user']
        print(f"User: {user}")
        if not user.is_authenticated:
            print("User not authenticated")
            return await self.close()

        # Get tournament id from the url
        try:
            self.tournament_id = self.scope["url_route"]["kwargs"]["tournament_id"]
            print(f"tournament_id: {self.tournament_id}", flush=True)
        except Exception as e:
            print(f"Error getting tournament_id: {e}", flush=True)
            return await self.close()

        # Create tournament if it does not exist
        if not self.tournament_id in Tournaments.tournaments:
            if not await Tournaments.create_tournament(self.tournament_id):
                print(f"Error creating tournament {self.tournament_id}", flush=True)
                return await self.close()
        self.tournament: Tournament = Tournaments.tournaments[self.tournament_id]
        print(f"tournament {self.tournament}", flush=True)

        # Add user to tournament as participant
        self.participant = await self.tournament.add_participant(user.id, self.channel_name, self.channel_layer)
        if not self.participant:
            return await self.close()
        print(f"{self.participant.id} participant {self.participant}", flush=True)

        # Broadcast participants to all
        # await self.tournament.broadcast_participants()

        print (f"{user.username} connected to {self.room_group_name}", flush=True)
        await self.accept()


    async def disconnect(self, close_code):
        print(f"disconnected from room {self.room_group_name}", flush=True)
        # Only remove participants if the tournamnet has not started
        # if self.tournament.status == "open":
        #     await remove_participant(self.tournament_id, self.participant.id)
        await self.tournament.remove_participant(self.participant.id)
        if self.room_group_name:
            await self.channel_layer.group_discard(self.room_group_name, self.channel_name)


    async def receive(self, text_data):
        try:
            json_data = json.loads(text_data)
            cmd = json_data.get("cmd")
            # cmd_args = json_data.get("cmd_args")
        except:
            print("Invalid command", flush=True)
            return
        case = {
            "start": Tournaments.start_tournament,
            # "stop": self.stop,
        }
        await case[cmd](tournament_id=self.tournament_id)


    async def broadcast_message(self, event):
        # Send message to WebSocket
        await self.send(text_data=json.dumps(event.get("msg")))
