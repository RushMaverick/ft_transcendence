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
        user = self.scope['user']
        if not user.is_authenticated:
            return await self.close()

        # Get tournament id from the url
        try:
            self.tournament_id = self.scope["url_route"]["kwargs"]["tournament_id"]
        except Exception as e:
            return await self.close()

        # Create tournament instance if it does not exist
        if not self.tournament_id in Tournaments.tournaments:
            if not await Tournaments.create_tournament(self.tournament_id):
                return await self.close()
        self.tournament: Tournament = Tournaments.tournaments[self.tournament_id]
        if self.tournament.status != "open":
            return await self.close()


        # If there is less than 4 participants, add user to the tournament
        if len(self.tournament.participants) >= 4:
            return await self.close()

        # Add user to tournament as participant
        self.participant = await self.tournament.add_participant(user.id, self.channel_name, self.channel_layer)
        if not self.participant:
            return await self.close()
        await self.accept()


    async def disconnect(self, close_code):
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
            return
        case = {
            "start": self.start
        }
        await case[cmd](tournament_id=self.tournament_id)

    async def start(self, tournament_id):
        if self.tournament.status != "open":
            return
        if len(self.tournament.participants) == 4:
            await Tournaments.start_tournament(tournament_id=tournament_id)


    async def broadcast_message(self, event):
        # Send message to WebSocket
        await self.send(text_data=json.dumps(event.get("msg")))

