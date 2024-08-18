from django.db import models
from django.contrib.auth.models import User

class Match(models.Model):
    # tournament = models.ForeignKey(
    #     Tournament,
    #     on_delete=models.SET_NULL,
    #     related_name='matches',
    #     default=None,
    #     null=True
    # )
    # round = models.ForeignKey(Round, on_delete=models.CASCADE, related_name='matches')
    player1 = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='player1_matches',
        default=None
    )
    player2 = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='player2_matches',
        default=None
    )
    player1_score = models.IntegerField()
    player2_score = models.IntegerField()
    winner = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='winner_matches',
        default=None,
        null=True
    )
    date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default="starting")

    def __str__(self):
        return "%s and %s" % (self.player1.username, self.player2.username)
