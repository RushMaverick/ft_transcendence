from django.db import models
from django.conf import settings
from user.models import User

# Create your models here.
# FriendsRequest Model:
# This model is designed to define the fields present in our FriendRequest model, which is used for managing 
# friend requests between users. The key fields included in this serializer are:

# - 'from_user': This represents the user who is sending the friend request. It's important to track who initiated 
#   the friend request to understand the relationship dynamics between users.
# 
# - 'to_user': This denotes the user who is receiving the friend request. Tracking the recipient helps in managing 
#   which users need to respond to friend requests and can also be used to display pending requests to them.
# 
# - 'accepted': This is a boolean field that indicates whether the friend request has been accepted or not. 
#   By default, it is set to False, meaning the request is pending. When the 'to_user' accepts the friend request, 
#   this field is updated to True. This field helps in distinguishing between pending and accepted friend requests.
# 
class FriendRequest(models.Model):
    from_user = models.ForeignKey(
    User,
    on_delete=models.SET_DEFAULT,
    related_name='sent_request',
    default=None
    )
    to_user = models.ForeignKey(
        User,
        on_delete=models.SET_DEFAULT,
        related_name='receive_request',
        default=None
    )
    created_at = models.DateTimeField(auto_now_add=True)
    accepted = models.BooleanField(default=False)
   
    def __str__(self):
        return f"Friend request from {self.from_user.username} to {self.to_user.username}"
