from django.contrib.auth.models import  User

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

from user.permissions import IsAuthenticatedOrCreateOnly, IsUser

from .models import Tournament, TournamentPlayer, Match
from .serializers import TournamentSerializer, TournamentPlayersSerializer, MatchSerializer


class MatchList(APIView):
    permission_classes = [IsAuthenticatedOrCreateOnly]

    def get(self, request, format=None):
        matches = Match.objects.all()
        serializer = MatchSerializer(matches, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = MatchSerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PlayerMatchesView(APIView):
    permissions_classes = [IsAuthenticatedOrCreateOnly]

    def get(self, request, user_id, formant=None):
        try:
            player = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)
        matches = Match.objects.filter(player1=player) | Match.objects.filter(player2=player)
        serializer = MatchSerializer(matches, many=True)
        return Response(serializer.data)

"""Return the list of the tournaments"""
@api_view(['GET'])
@permission_classes([IsAuthenticatedOrCreateOnly, IsUser])
def list_tournaments(request):
	user = request.user
	print("what ", user, flush=True)
	if(user.is_authenticated == False):
		return(Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED))
	tournaments = Tournament.objects.all()
	serializer = TournamentSerializer(tournaments, many=True)
	return Response({"tournaments": serializer.data}, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticatedOrCreateOnly, IsUser])
def get_tournament(request, id):
	user = request.user
	print("what tourney", user, flush=True)
	if(user.is_authenticated == False):
		return(Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED))
	try:
		tournament = Tournament.objects.get(id=id)
	except Tournament.DoesNotExist:
		return Response({"message": "Tournament not found"}, status=status.HTTP_404_NOT_FOUND)

	serializer = TournamentSerializer(tournament)
	return Response({"tournament": serializer.data}, status=status.HTTP_200_OK)

"""Create a tournament"""
@api_view(['POST'])
@permission_classes([IsAuthenticatedOrCreateOnly, IsUser])
def create_tournament(request):
	user = request.user
	print("what ", user, flush=True)
	if(user.is_authenticated == False):
		return(Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED))
	serializer = TournamentSerializer(data=request.data)
	if not serializer.is_valid():
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	tournament = Tournament.objects.create(creator=user, **serializer.validated_data)
	serializer = TournamentSerializer(tournament)
	return Response({"tournament": serializer.data}, status=status.HTTP_201_CREATED)

"""Join to a tournament"""
@api_view(['POST'])
@permission_classes([IsAuthenticatedOrCreateOnly, IsUser])
def join_tournament(request, tournament_id):
	user = request.user
	if(user.is_authenticated == False):
		return(Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED))
	serializer = TournamentPlayersSerializer(data=request.data)
	if not serializer.is_valid():
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
	tournament = Tournament.objects.get(id=tournament_id)
	if tournament:
		TournamentPlayer.objects.create(tournament=tournament, player=user)
		return Response({"message": "You have been registered to the tournament"}, status=status.HTTP_200_OK)
	else:
		return Response({"message": "Tournament not found"}, status=status.HTTP_404_NOT_FOUND)

"""Return the list of the tournaments the user is registered to"""
@api_view(['GET'])
@permission_classes([IsAuthenticatedOrCreateOnly, IsUser])
def list_registered_tournaments(request):
	user = request.user
	if(user.is_authenticated == False):
		return(Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED))
	tournaments = TournamentPlayer.objects.filter(player=user)
	serializer = TournamentPlayersSerializer(tournaments, many=True)
	return Response({"tournaments": serializer.data}, status=status.HTTP_200_OK)
