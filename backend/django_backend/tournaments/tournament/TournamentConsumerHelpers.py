from asgiref.sync import sync_to_async

from match.serializers import MatchSerializer
from tournaments.serializers import TournamentSerializer, RoundSerializer, ParticipantSerializer
from tournaments.models import Tournament, Round, Participant
from match.models import Match

@sync_to_async
def create_match(tournament_id: int, round_id: int, player1_id: int, player2_id: int):
    match_serializer = MatchSerializer(data={
        "tournament": tournament_id,
        "round": round_id,
        "player1": player1_id,
        "player2": player2_id,
        "player1_score": 0,
        "player2_score": 0,
    })
    if not match_serializer.is_valid():
        return None
    match_serializer.save()
    #return match id
    return match_serializer.data["id"]

@sync_to_async
def get_match(match_id: int):
    try:
        match = MatchSerializer(Match.objects.get(id=match_id)).data
        return match
    except Match.DoesNotExist:
        return None
    except Exception as e:
        return None

@sync_to_async
def create_round(tournament_id: int, round_number: int) -> int:
    round_serializer = RoundSerializer(data={
        "round": round_number,
        "tournament": tournament_id,
    })
    if round_serializer.is_valid():
        round = round_serializer.save()
    else:
        print(round_serializer.errors, flush=True)
    return round.id

@sync_to_async
def add_match_to_round(round_id: int, match_id: int):
    round = Round.objects.get(id=round_id)
    round.matches.add(match_id)

@sync_to_async
def get_tournament(tournament_id: int):
    try:
        tournament = TournamentSerializer(Tournament.objects.get(id=tournament_id)).data
        return tournament
    except Tournament.DoesNotExist:
        return None
    except Exception as e:
        return None

@sync_to_async
def add_participant(tournament_id: int, player_id: int):
    participant_serializer = ParticipantSerializer(data={"tournament": tournament_id, "player": player_id})
    if not participant_serializer.is_valid():
        return None
    participant = participant_serializer.save()
    return participant.player

@sync_to_async
def remove_participant(tournament_id: int, player_id: int) -> None:
    try:
        participant = Participant.objects.get(tournament=tournament_id, player=player_id)
    except Participant.DoesNotExist:
        return
    participant.delete()

@sync_to_async
def get_participants(tournament_id: int):
    try:
        participants = ParticipantSerializer(Participant.objects.filter(tournament=tournament_id), many=True).data
        return participants
    except Exception as e:
        return None

@sync_to_async
def change_tournament_status(tournament_id: int, status: str) -> None:
    try:
        tournament = Tournament.objects.get(id=tournament_id)
        tournament.status = status
        tournament.save()
    except Tournament.DoesNotExist:
        return None
    except Exception as e:
        return None
