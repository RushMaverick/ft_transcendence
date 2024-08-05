from asgiref.sync import sync_to_async

from match.serializers import MatchSerializer
from tournaments.serializers import TournamentSerializer, RoundSerializer, ParticipantSerializer
from tournaments.models import Tournament, Round, Participant

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
    # print(match_serializer.data, flush=True)
    return match

@sync_to_async
def create_round(tournament_id: int, round_number: int) -> int:
    round_serializer = RoundSerializer(data={
        "round": round_number,
        "tournament": tournament_id,
    })
    if round_serializer.is_valid():
        round = round_serializer.save()
        # print(round_serializer.data, flush=True)
    else:
        print(round_serializer.errors, flush=True)
    # print("round id", round.id, flush=True)
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
    # print(participant_serializer.data, flush=True)
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
