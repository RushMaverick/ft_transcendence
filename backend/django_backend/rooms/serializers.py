from django.contrib.auth.models import  User
from rest_framework import serializers
from .models import InvitationRequest
# from user.models import OnlineStatus
from user.serializers import FriendshipSerializer 

class InvitationSerializer(serializers.ModelSerializer):
    from_user = FriendshipSerializer(read_only=True)
    to_user = FriendshipSerializer(read_only=True)

    class Meta:
        model = InvitationRequest
        fields = ['id', 'from_user', 'to_user', 'accepted']