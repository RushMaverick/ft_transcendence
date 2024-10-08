from django.db import models
from django.conf import settings
from user.models import User

# Create your models here.

class Room(models.Model):
    # room_name = models.CharField(max_length=100, unique=True)
    users = models.ManyToManyField(User, related_name='rooms', blank=True)
    creator = models.ForeignKey(User, related_name='created_rooms', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name

    def is_full(self):
        return self.users.count() >= 2

class InvitationRequest(models.Model):
    from_user = models.ForeignKey(
    User,
    on_delete=models.CASCADE,
    related_name='invitation_requests_sent',
    default=None
    )
    to_user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='invitation_requests_received',
        default=None
    )
    room = models.ForeignKey(Room, related_name='invitations', on_delete=models.CASCADE)
    accepted = models.BooleanField(default=False)

    def __str__(self):
        return f"Friend request from {self.from_user.username} to {self.to_user.username}"
