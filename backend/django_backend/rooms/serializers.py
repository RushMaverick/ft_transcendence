from django.contrib.auth.models import  User
from rest_framework import serializers
from .models import InvitationRequest, Room
# from user.models import OnlineStatus
from user.serializers import FriendshipSerializer, UserSerializer

class RoomSerializer(serializers.ModelSerializer):
    users = FriendshipSerializer(many=True, read_only=True)

    class Meta:
        model = Room
        fields = ['id', 'users']

class InvitationSerializer(serializers.ModelSerializer):
    from_user = UserSerializer(read_only=True)
    to_user = FriendshipSerializer(read_only=True)
    # room = RoomSerializer(read_only=True)

    class Meta:
        model = InvitationRequest
        fields = ['id', 'from_user', 'to_user', 'accepted']
