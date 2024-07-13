# from django.contrib.auth.models import  User

from rest_framework import status, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes


from user.permissions import IsAuthenticatedOrCreateOnly, IsUser

from .models import Tournament, Participant, Round
from .serializers import TournamentSerializer, ParticipantSerializer, RoundSerializer
# from match.serializers import MatchSerializer



class TournamentListView(APIView):
    permission_classes = [IsAuthenticatedOrCreateOnly]

    # Get list of tournaments
    def get(self, request, format=None):
        tournaments = Tournament.objects.all()
        serializer = TournamentSerializer(tournaments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Create a tournament
    def post(self, request, format=None):
        serializer = TournamentSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        user = request.user
        if user.is_authenticated == False:
            return Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED)
        tournament = serializer.save(creator=user)
        return Response(TournamentSerializer(tournament).data, status=status.HTTP_201_CREATED)

class TournamentDetailView(APIView):
    permission_classes = [IsAuthenticatedOrCreateOnly]

    # Get a tournament
    def get(self, request, id, format=None):
        user = request.user
        if user.is_authenticated == False:
            return Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED)
        try:
            tournament = Tournament.objects.get(id=id)
        except Tournament.DoesNotExist:
            return Response({"message": "Tournament not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = TournamentSerializer(tournament)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Join a tournament
    def post(self, request, id, format=None):
        user = request.user
        if user.is_authenticated == False:
            return Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED)
        serializer = ParticipantSerializer(data={"tournament": id, "player": user.id})
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        tournament = Tournament.objects.get(id=serializer.data['tournament'])
        if tournament:
            Participant.objects.create(tournament=tournament, player=user)
            return Response({"message": "You have been registered to the tournament"}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Tournament not found"}, status=status.HTTP_404_NOT_FOUND)


class RoundViewSet(viewsets.ModelViewSet):
    # queryset = Round.objects.all()
    serializer_class = RoundSerializer
    permission_classes = [IsAuthenticatedOrCreateOnly]

    # Get all rounds of a tournament
    def get_queryset(self):
        queryset = Round.objects.all()
        tournament_id = self.kwargs.get('tournament_id')
        if tournament_id is not None:
            queryset = queryset.filter(tournament_id=tournament_id)
        return queryset

    # Create a round
    def perform_create(self, serializer):
        tournament_id = self.request.data['tournament']
        tournament = Tournament.objects.get(id=tournament_id)
        serializer.save(tournament=tournament)

    # Add matches to the round
    def update(self, request, *args, **kwargs):
        tournament_id = self.kwargs.get('tournament_id')
        round_id = int(self.kwargs.get('pk'))
        try:
            round_obj = Round.objects.get(tournament_id=tournament_id, round=round_id)
        except Round.DoesNotExist:
            return Response({"message": "Round not found"}, status=status.HTTP_404_NOT_FOUND)

        try:
            match = request.data['match']
        except KeyError:
           return Response({"match": ["This field is required."]}, status=status.HTTP_400_BAD_REQUEST)
        try:
            round_obj.matches.add(match)
        except:
            return Response({"message": "Match not found"}, status=status.HTTP_404_NOT_FOUND)
        return Response({"message": "Match added to the round"}, status=status.HTTP_200_OK)


# """Return the list of the tournaments the user is registered to"""
# @api_view(['GET'])
# @permission_classes([IsAuthenticatedOrCreateOnly, IsUser])
# def list_registered_tournaments(request):
# 	user = request.user
# 	if(user.is_authenticated == False):
# 		return(Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED))
# 	tournaments = Participant.objects.filter(player=user)
# 	serializer = ParticipantSerializer(tournaments, many=True)
# 	return Response({"tournaments": serializer.data}, status=status.HTTP_200_OK)

