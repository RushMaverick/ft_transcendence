from rest_framework import serializers
from .models import Match
from user.serializers import UserSerializer


class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = ['id', 'player1', 'player2', 'player1_score', 'player2_score', 'winner', 'date', 'status']

    def validate(self, data):
        if 'player1' not in data:
            raise serializers.ValidationError({
                'player1': 'This field is required.',
            })
        if 'player2' not in data:
             raise serializers.ValidationError({
                'player2': 'This field is required.'
            })
        if data['player1'] == data['player2']:
            raise serializers.ValidationError({
                'player1': 'Player 1 and Player 2 cannot be the same.'
            })
        if 'winner' in data and data['winner'] != data['player1'] and data['winner'] != data['player2']:
            raise serializers.ValidationError({
                'winner': 'Winner must be either Player 1 or Player 2.'
            })
        return data

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['player1'] = UserSerializer(instance.player1).data
        data['player2'] = UserSerializer(instance.player2).data
        if instance.winner:
            data['winner'] = UserSerializer(instance.winner).data
        return data
