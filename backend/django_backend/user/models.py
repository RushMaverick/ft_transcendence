from django.db import models
from django.contrib.auth.models import User


# OnlineStatus Model:
# # This model is designed to get the Online Status from an user, so for this we use model OnlineStatus
# and we use as a fields the user id, username, is_online and the last connection of the user:

# - 'user': This represents the user ID of the user.
# 
# - 'to_user':This is a boolean field that indicates whether a user is online or not. 
#   By default, it is set to False, meaning the user is offline.
# 
# - 'last connection': This is a Date Time Field, which represents the last connections from an user 
# 
class OnlineStatus(models.Model):
    user = models.OneToOneField(
    User,
    on_delete=models.CASCADE,
    )
    is_online = models.BooleanField(default=False)
    last_connection = models.DateTimeField(auto_now_add=True)
    

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
    player1_score = models.IntegerField()
    player2_score = models.IntegerField()
    winner = models.ForeignKey(
        User,
        on_delete=models.SET_DEFAULT,
        related_name='winner',
        default=None
    )
    date = models.DateTimeField(auto_now_add=True)

    # @staticmethod
    # def create_match(player1, player2):
    #     # Ensure both players exist
    #     try:
    #         player1 = User.objects.get(id=player1)
    #         player2 = User.objects.get(id=player2)
    #     except User.DoesNotExist:
    #         raise ValueError(f"One or both players do not exist.")

    #     match = Match(player1=player1, player2=player2)
    #     match.save()

    #     return match

    def __str__(self):
        return "%s and %s" % (self.player1.username, self.player2.username)
