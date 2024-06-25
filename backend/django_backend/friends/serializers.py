from django.contrib.auth.models import  User
from rest_framework import serializers
from .models import FriendRequest
from user.serializers import UserSerializer

class FriendsSerializer(serializers.ModelSerializer):
    from_user = serializers.SlugRelatedField(slug_field='username', queryset=User.objects.all())
    to_user = serializers.SlugRelatedField(slug_field='username', queryset=User.objects.all())

    class Meta:
        model = FriendRequest
        fields = ['from_user', 'to_user', 'accepted']
