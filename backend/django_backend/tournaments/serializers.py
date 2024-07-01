from rest_framework import serializers
from .models import Tournament, TournamentPlayer
from rest_framework.validators import UniqueValidator

from .models import Match
from user.serializers import UserSerializer


class MatchSerializer(serializers.ModelSerializer):
    # player1 = UserSerializer(read_only=True)
    # player2 = UserSerializer(read_only=True)
    # winner = UserSerializer(read_only=True)
    class Meta:
        model = Match
        fields = '__all__'

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
        return data

class TournamentPlayersSerializer(serializers.ModelSerializer):
	class Meta:
		model = TournamentPlayer
		fields = '__all__'

class TournamentSerializer(serializers.ModelSerializer):
	name = serializers.CharField(required=True, validators=[UniqueValidator(queryset=Tournament.objects.all())])
	# description = serializers.CharField(required=False)
	# players = serializers.SerializerMethodField()
	players = UserSerializer(many=True, read_only=True)
	# creator = serializers.SerializerMethodField()
	creator = UserSerializer(read_only=True)
	matches = MatchSerializer(many=True, read_only=True)
	class Meta:
		model = Tournament
		fields = ['id', 'name', 'date', 'creator', 'players', 'matches']
		# fields = '__all__'

	# def get_players(self, instance):
	# 	return [player.player.id for player in obj.tournament_players.all()]
	def get_players(self, obj):
		"""
		Return a list of dictionaries containing player IDs and names.
		Each dictionary contains 'id' and 'name' keys.
		"""
		players_info = []
		for player in obj.tournament_player_set.all():
			players_info.append({'id': player.player.id, 'name': player.player.username})
		return players_info

	def get_creator(self, obj):
		"""
		Return the creator's information.
		"""
		creator = obj.creator
		if creator:
			return {
				'id': creator.id,
				'username': creator.username
			}
		return None

	# def get_matches(self, obj):
	# 	"""
	# 	Return a list of matches associated with the tournament.
	# 	"""
	# 	matches = Match.objects.filter(tournament=obj)
	# 	return [{'match_id': match.id, 'player1': match.player1, 'player2': match.player2, 'winner': match.winner} for match in matches]
