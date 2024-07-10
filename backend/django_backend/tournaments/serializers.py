from rest_framework import serializers
from .models import Tournament, Participant, Match, Round
from rest_framework.validators import UniqueValidator

from .models import Match
from user.serializers import UserSerializer


class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = ['id', 'player1', 'player2', 'player1_score', 'player2_score', 'winner']

    def validate(self, data):
        if 'player1' not in data:
            raise serializers.ValidationError({
                'player1': 'This field is required.',
            })
        if 'player2' not in data:
             raise serializers.ValidationError({
                'player2': 'This field is required.'
            })
        if 'winner' not in data:
            raise serializers.ValidationError({
                'winner': 'This field is required.'
            })
        if data['player1'] == data['player2']:
            raise serializers.ValidationError({
                'player1': 'Player 1 and Player 2 cannot be the same.'
            })
        if data['winner'] != data['player1'] and data['winner'] != data['player2']:
            raise serializers.ValidationError({
                'winner': 'Winner must be either Player 1 or Player 2.'
            })
        # if 'tournament' in data:
        #     tournament_id = data['tournament'].id
        #     player1_id = data['player1'].id
        #     player2_id = data['player2'].id

        #     player1_in_tournament = TournamentPlayer.objects.filter(tournament=tournament_id, player=player1_id).exists()
        #     player2_in_tournament = TournamentPlayer.objects.filter(tournament=tournament_id, player=player2_id).exists()
        #     if not player1_in_tournament or not player2_in_tournament:
        #         raise serializers.ValidationError("Both players must be in the tournament.")
        return data

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['player1'] = UserSerializer(instance.player1).data
        data['player2'] = UserSerializer(instance.player2).data
        data['winner'] = UserSerializer(instance.winner).data
        return data


class RoundSerializer(serializers.ModelSerializer):
    matches = MatchSerializer(many=True, read_only=True)
    class Meta:
        model = Round
        fields = ['id', 'tournament', 'matches']

class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = ['id', 'tournament', 'player', 'position']

    def validate(self, data):
        print("Data:", data, flush=True)
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
    # description = serializers.CharField(required=False)
    # players = serializers.SerializerMethodField()
    participants = UserSerializer(many=True, read_only=True)
    # creator = serializers.SerializerMethodField()
    creator = UserSerializer(read_only=True)
    matches = MatchSerializer(many=True, read_only=True)
    class Meta:
        model = Tournament
        fields = ['id', 'name', 'date', 'creator', 'participants', 'matches']
        # fields = '__all__'

    def save(self, **kwargs):
        # Allow passing additional fields directly
        return super().save(**kwargs)

	# def get_matches(self, obj):
	# 	"""
	# 	Return a list of matches associated with the tournament.
	# 	"""
	# 	matches = Match.objects.filter(tournament=obj)
	# 	return [{'match_id': match.id, 'player1': match.player1, 'player2': match.player2, 'winner': match.winner} for match in matches]
