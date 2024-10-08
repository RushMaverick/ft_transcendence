from rest_framework import serializers
from .models import Tournament, Participant, Match, Round
from rest_framework.validators import UniqueValidator

from match.serializers import MatchSerializer
from user.serializers import UserSerializer


class RoundSerializer(serializers.ModelSerializer):
    matches = MatchSerializer(many=True, read_only=True)
    round = serializers.IntegerField(required=True, min_value=1)
    class Meta:
        model = Round
        fields = ['id', 'round','tournament', 'matches']

class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = ['id', 'tournament', 'player', 'position']

    def validate(self, data):
        try:
            tournament_id = data['tournament'].id
            player_id = data['player'].id
        except KeyError:
            raise serializers.ValidationError("Both tournament and player fields are required.")
        existing_participant = Participant.objects.filter(tournament=tournament_id, player=player_id).exists()
        if existing_participant:
            raise serializers.ValidationError("A user can only participate once per tournament.")
        return data

class TournamentSerializer(serializers.ModelSerializer):
    name = serializers.CharField(required=True, validators=[UniqueValidator(queryset=Tournament.objects.all())])
    participants = UserSerializer(many=True, read_only=True)
    creator = UserSerializer(read_only=True)
    rounds = RoundSerializer(many=True, read_only=True)
    class Meta:
        model = Tournament
        fields = ['id', 'name', 'date', 'creator', 'participants', 'rounds']
        # fields = '__all__'

    def save(self, **kwargs):
        # Allow passing additional fields directly
        return super().save(**kwargs)
