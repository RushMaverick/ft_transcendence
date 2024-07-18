import json
from channels.generic.websocket import AsyncWebsocketConsumer


from tournaments.serializers import TournamentSerializer, RoundSerializer, ParticipantSerializer
from match.serializers import MatchSerializer
from asgiref.sync import sync_to_async

from tournaments.models import Tournament, Round, Participant

# @sync_to_async
# def create_tournament(tournament_name: str):
#     print("create_tournament", flush=True)
#     tournament_serializer = TournamentSerializer(data={
#         "name": tournament_name,
#     })
#     if tournament_serializer.is_valid():
#         tournament = tournament_serializer.save()
#         print(tournament_serializer.data, flush=True)
#     else:
#         print(tournament_serializer.errors, flush=True)

#     print("tournament id", tournament.id, flush=True)
#     return tournament

@sync_to_async
def create_match(tournament_id: int, round_id: int, player1_id: int, player2_id: int):
    print("create_match", flush=True)
    match_serializer = MatchSerializer(data={
        "tournament": tournament_id,
        "round": round_id,
        "player1": player1_id,
        "player2": player2_id,
    })
    if not match_serializer.is_valid():
        print(match_serializer.errors, flush=True)
        return None
    match = match_serializer.save()
    print(match_serializer.data, flush=True)
    return match

@sync_to_async
def create_round(tournament_id: int, round_number: int) -> int:
    round_serializer = RoundSerializer(data={
        "round": round_number,
        "tournament": tournament_id,
    })
    if round_serializer.is_valid():
        round = round_serializer.save()
        print(round_serializer.data, flush=True)
    else:
        print(round_serializer.errors, flush=True)
    print("round id", round.id, flush=True)
    return round.id

@sync_to_async
def get_tournament(tournament_id: int):
    print("get_tournament", flush=True)
    try:
        tournament = TournamentSerializer(Tournament.objects.get(id=tournament_id)).data
        return tournament
    except Tournament.DoesNotExist:
        print(f"Tournament with id {tournament_id} does not exist", flush=True)
        return None
    except Exception as e:
        print(f"Unexpected error fetching tournament: {e}", flush=True)
        return None

@sync_to_async
def add_participant(tournament_id: int, player_id: int):
    print("add_participant", flush=True)
    participant_serializer = ParticipantSerializer(data={"tournament": tournament_id, "player": player_id})
    if not participant_serializer.is_valid():
        print(participant_serializer.errors, flush=True)
        return None
    participant = participant_serializer.save()
    print(participant_serializer.data, flush=True)
    return participant

@sync_to_async
def remove_participant(tournament_id: int, player_id: int) -> None:
    print("remove_participant", flush=True)
    try:
        participant = Participant.objects.get(tournament=tournament_id, player=player_id)
    except Participant.DoesNotExist:
        print("Participant does not exist", flush=True)
        return
    participant.delete()

@sync_to_async
def get_participants(tournament_id: int):
    print("get_participants", flush=True)
    try:
        participants = ParticipantSerializer(Participant.objects.filter(tournament=tournament_id), many=True).data
        return participants
    except Exception as e:
        print(f"Unexpected error fetching participants: {e}", flush=True)
        return None

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


        # Check that tournament exists
        self.tournament = await get_tournament(self.tournament_id)
        if not self.tournament:
            print(f"Tournament {self.tournament_id} does not exist", flush=True)
            return await self.close()

        # Check max number of participants
        # if self.tournament.max_participants <= len(self.tournament.participants):
        #     print(f"Tournament {self.tournament_id} is full", flush=True)
        #     return await self.close()

        # Check that tournament is open
        # if self.tournament.status == "closed":
        #     print(f"Tournament {self.tournament_id} is not open", flush=True)
        #     await self.close()
        #     return
        print(f"tournament {self.tournament}", flush=True)

        # Add user to tournament as participant
        self.participant = await add_participant(self.tournament_id, user.id)
        if not self.participant:
            return await self.close()

        print(f"{self.participant.id} participant {self.participant}", flush=True)

        # Broadcast that user has joined the tournament room
        self.room_group_name = f"tournament_{self.tournament_id}"
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        await self.channel_layer.group_send(
        	self.room_group_name, {"type": "broadcast.message", "msg": f"{user.username} joined the tournament"}
        )

        # Broadcast participants to all
        participants = await get_participants(self.tournament_id)
        print(f"participants: {participants}", flush=True)
        await self.channel_layer.group_send(
        	self.room_group_name, {"type": "broadcast.message", "msg": {"participants": participants}}
        )

        print (f"{user.username} connected to {self.room_group_name}", flush=True)
        await self.accept()


    async def disconnect(self, close_code):
        print(f"disconnected from room {self.room_group_name}", flush=True)
        # Only remove participants if the tournamnet has not started
        # if self.tournament.status == "open":
        #     await remove_participant(self.tournament_id, self.participant.id)
        await remove_participant(self.tournament_id, self.participant.id)
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
            "start": self.start,
            # "stop": self.stop,
        }
        await case[cmd]()


    async def broadcast_message(self, event):
        # Send message to WebSocket
        await self.send(text_data=json.dumps({'msg': event}))


    async def start(self):
        print("start", flush=True)
        # Check that tournament has not started
        # if self.tournament.status == "open":
        #     print("Tournament already started", flush=True)
        #     return

        # Check that tournament has enough participants
        participants = await get_participants(self.tournament_id)
        # print(f"participants: {participants}", flush=True)
        # if len(participants) != 4:
        #     print("Not enough participants", flush=True)
        #     return

        # Close tournament
        # TournamentSerializer(tournament, data={"status": "closed"}, partial=True)
        # if not tournament_serializer.is_valid():
        #     print(tournament_serializer.errors, flush=True)
        #     return
        # tournament_serializer.save()
        # print(tournament_serializer.data, flush=True)
        await self.channel_layer.group_send(
        	self.room_group_name, {"type": "broadcast.message", "msg": "Tournament started"}
        )

        # Pair participants
        # participants = await get_participants(self.tournament_id)
        # print(f"participants: {participants}", flush=True)
        for i in range(0, len(participants), 2):
            player1 = participants[i]
            player2 = participants[i+1]
            match = await create_match(self.tournament_id, 1, player1, player2)
            if not match:
                print("Error creating match", flush=True)
                return
            # notify pong players that match has been created

            # print(f"match: {match}", flush=True)

        # print(f"matches: {matches}", flush=True)
        await self.channel_layer.group_send(
        	self.room_group_name, {"type": "broadcast.message", "msg": "Matches created"}
        )




