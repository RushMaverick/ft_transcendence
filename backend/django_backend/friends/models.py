from django.db import models
from django.conf import settings
from user.models import User

# Create your models here.

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
