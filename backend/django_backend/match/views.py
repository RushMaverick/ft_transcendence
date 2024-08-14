from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Match
from .serializers import MatchSerializer
from django.contrib.auth.models import User
from user.permissions import IsAuthenticatedOrCreateOnly

from drf_spectacular.utils import extend_schema, OpenApiParameter, OpenApiExample
from drf_spectacular.types import OpenApiTypes

class MatchListView(APIView):
    permission_classes = [IsAuthenticatedOrCreateOnly]

    @extend_schema(
        description='Get all matches.',
        responses={
            200: MatchSerializer(many=True)
        }
    )
    def get(self, request, format=None):
        matches = Match.objects.all()
        serializer = MatchSerializer(matches, many=True)
        return Response(serializer.data)

    @extend_schema(
        description='Create a new match.',
        request=MatchSerializer,
        responses={
            201: MatchSerializer
        }
    )
    def post(self, request, format=None):
        serializer = MatchSerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PlayerMatchListView(APIView):
    permissions_classes = [IsAuthenticatedOrCreateOnly]

    @extend_schema(
        parameters=[
            OpenApiParameter(
                name='user_id',
                description='User ID',
                required=True,
                type=OpenApiTypes.INT,
                location=OpenApiParameter.PATH
            )
        ],
       responses={
           200: MatchSerializer(many=True)
       },
       description='Get all matches for a player.',
       examples=[
              OpenApiExample(
                'Get all matches for a player',
                value={
                        "id": 1,
                        "player1": {
                            "id": 1,
                            "username": "test1",
                            "avatar": {
                                "image": "string",
                                "uploaded_on": "2024-07-12T10:45:29.531147Z"
                            }
                        },
                        "player2": {
                            "id": 3,
                            "username": "Brooklyn13",
                            "avatar": {
                                "image": "string",
                                "uploaded_on": "2024-07-12T11:38:52.028856Z"
                            }
                        },
                        "player1_score": 5,
                        "player2_score": 7,
                        "winner": {
                            "id": 3,
                            "username": "Brooklyn13",
                            "avatar": {
                                "image": "string",
                                "uploaded_on": "2024-07-12T11:38:52.028856Z"
                            }
                        },
                        "date": "2024-07-12T11:38:55.773283Z"
                    }
              )
         ]
    )
    def get(self, request, user_id, formant=None):
        try:
            player = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)
        matches = Match.objects.filter(player1=player) | Match.objects.filter(player2=player)
        serializer = MatchSerializer(matches, many=True)
        return Response(serializer.data)

class StatsViewSet(APIView):
    permission_classes = [IsAuthenticatedOrCreateOnly]

    def get(self, request, user_id):
        try:
            player = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)
        
        n_wins =  Match.objects.filter(winner=player).count()
        n_matches = Match.objects.filter(player1=player).count() + Match.objects.filter(player2=player).count()
        n_loses = n_matches - n_wins

        stats = {
            "wins": n_wins,
            "loses": n_loses,
            "matches_played": n_matches
        }
        return Response({"Stats": stats}, status=status.HTTP_200_OK)

        
