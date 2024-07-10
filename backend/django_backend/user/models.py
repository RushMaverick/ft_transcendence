from django.db import models
from django.contrib.auth.models import User
from tournaments.models import Tournament


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

