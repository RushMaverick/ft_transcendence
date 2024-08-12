from django.contrib.auth.models import  User
from rest_framework import serializers
from .models import FriendRequest
from user.models import OnlineStatus
from user.serializers import FriendshipSerializer, AvatarSerializer, UserSerializer



# FriendsSerializer:
# This serializer is designed to define the fields present in our FriendRequest model, which is used for managing
# friend requests between users. The key fields included in this serializer are:

# - 'from_user': This represents the user who is sending the friend request. It's important to track who initiated
#   the friend request to understand the relationship dynamics between users.
#
# - 'to_user': This denotes the user who is receiving the friend request. Tracking the recipient helps in managing
#   which users need to respond to friend requests and can also be used to display pending requests to them.
#
# - 'id': Each friend request is assigned a unique identifier (ID). This ID is crucial for tracking and referencing
#   specific friend requests, making it easier to accept, decline, or manage requests individually.
#
# - 'accepted': This is a boolean field that indicates whether the friend request has been accepted or not.
#   By default, it is set to False, meaning the request is pending. When the 'to_user' accepts the friend request,
#   this field is updated to True. This field helps in distinguishing between pending and accepted friend requests.
#
class FriendsSerializer(serializers.ModelSerializer):
    from_user = UserSerializer(read_only=True)
    to_user = FriendshipSerializer(read_only=True)

    class Meta:
        model = FriendRequest
        fields = ['id', 'from_user', 'to_user', 'accepted']


# FriendsListSerializer:
# This serializer is designed to list the friends from an user, so for this we use model user
# and we use as a fields the id of the user and the username
# We also have is_online, which is getting from Online Status model, so that is why we call the fuction
# get_ which is gonna provided if a user is_online.
class FriendsListSerializer(serializers.ModelSerializer):
    is_online = serializers.SerializerMethodField()
    avatar = AvatarSerializer(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'is_online', 'avatar']

    def get_is_online(self, obj):
        user_status = OnlineStatus.objects.get(user=obj)
        return user_status.is_online
