from django.db import models
from django.contrib.auth.models import User
# from rest_framework.validators import UniqueValidator

from match.models import Match

class Tournament(models.Model):
    name = models.CharField(max_length=50)
    # description = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    creator = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        related_name='tournament_creator',
        default=None,
        null=True
    )
    participants = models.ManyToManyField(
        User,  # Reference the related model
        through='Participant'
    )

    def __str__(self):
        return "%s" % (self.name)

class Participant(models.Model):
    tournament = models.ForeignKey(
        Tournament,
        on_delete=models.CASCADE,
        related_name='tournament_player_set',
        default=None
    )
    player = models.ForeignKey(
        User,
        on_delete=models.SET_DEFAULT,
        related_name='tournament_participation',
        default=None
    )
    position = models.PositiveIntegerField(default=1)

    def __str__(self):
        return "%s" % (self.player)

class Round(models.Model):
    tournament = models.ForeignKey(Tournament, on_delete=models.CASCADE, related_name='rounds')
    matches = models.ManyToManyField(Match, through='RoundMatch')
    round = models.PositiveIntegerField(default=1)

    def __str__(self):
        return "%s" % (self.tournament.name)

class RoundMatch(models.Model):
    round = models.ForeignKey(Round, on_delete=models.CASCADE, related_name='round_matches')
    match = models.ForeignKey(Match, on_delete=models.CASCADE, related_name='round_match')

    def __str__(self):
        return "%s" % (self.match)
