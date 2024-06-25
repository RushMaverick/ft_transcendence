from django.contrib.auth.models import  User
from rest_framework import serializers
from .models import FriendRequest

class FriendsSerializer(serializers.ModelSerializer):
    from_user = serializers.SlugRelatedField(slug_field='username', queryset=User.objects.all())
    to_user = serializers.SlugRelatedField(slug_field='username', queryset=User.objects.all())

    class Meta:
        model = FriendRequest
        fields = ['id', 'from_user', 'to_user', 'accepted']

class FriendsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']
