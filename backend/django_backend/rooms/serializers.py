from django.contrib.auth.models import  User
from rest_framework import serializers
from .models import InvitationRequest, Room
# from user.models import OnlineStatus
from user.serializers import FriendshipSerializer 

class RoomSerializer(serializers.ModelSerializer):
    users = FriendshipSerializer(read_only = True)

    class Meta:
        model = Room
        fields = ['id', 'room_name', 'users']

class InvitationSerializer(serializers.ModelSerializer):
    from_user = FriendshipSerializer(read_only=True)
    to_user = FriendshipSerializer(read_only=True)
    room = RoomSerializer(read_only=True)

    class Meta:
        model = InvitationRequest
        fields = ['from_user', 'to_user', 'room', 'accepted']