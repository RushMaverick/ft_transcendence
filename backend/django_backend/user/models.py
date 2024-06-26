from django.db import models
from django.contrib.auth.models import User

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Avatar(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    image = models.ImageField(upload_to=upload_to, blank=True, null=True)
    uploaded_on = models.DateTimeField(auto_now_add=True)
    # avatar = models.URLField(default='https://www.gravatar.com/avatar/')
    # avatar = models.URLField(default='https://picsum.photos/200')

    def __str__(self):
        return "%s's profile" % self.user.username

class Match(models.Model):
    player1 = models.ForeignKey(
        User,
        on_delete=models.SET_DEFAULT,
        related_name='player1',
        default=None
    )
    player2 = models.ForeignKey(
        User,
        on_delete=models.SET_DEFAULT,
        related_name='player2',
        default=None
    )
    player1_score = models.IntegerField(default=0)
    player2_score = models.IntegerField(default=0)
    winner = models.ForeignKey(
        User,
        on_delete=models.SET_DEFAULT,
        related_name='winner',
        default=None
    )
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "%s and %s" % (self.player1.username, self.player2.username)
