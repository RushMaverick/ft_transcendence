from django.db import models
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator


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
    players = models.ManyToManyField(
        User,  # Reference the related model
        through='TournamentPlayer',
        related_name='tournaments',
        blank=True  # Allow empty relationships
    )

    def __str__(self):
        return "%s" % (self.name)

class TournamentPlayer(models.Model):
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

    def __str__(self):
        return "%s" % (self.player)


class Match(models.Model):
    tournament = models.ForeignKey(
        Tournament,
        on_delete=models.SET_NULL,
        related_name='matches',
        default=None,
        null=True
    )
    player1 = models.ForeignKey(
        User,
        on_delete=models.SET_DEFAULT,
        related_name='player1_matches',
        default=None
    )
    player2 = models.ForeignKey(
        User,
        on_delete=models.SET_DEFAULT,
        related_name='player2_matches',
        default=None
    )
    player1_score = models.IntegerField()
    player2_score = models.IntegerField()
    winner = models.ForeignKey(
        User,
        on_delete=models.SET_DEFAULT,
        related_name='winner_matches',
        default=None
    )
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "%s and %s" % (self.player1.username, self.player2.username)
