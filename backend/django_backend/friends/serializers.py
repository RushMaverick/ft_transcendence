from django.contrib.auth.models import  User
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import FriendRequest

class FriendsSerializer(serializers.ModelSerializer):
    from_user = serializers.SlugRelatedField(slug_field='username', queryset=User.objects.all())
    to_user = serializers.SlugRelatedField(slug_field='username', queryset=User.objects.all())

    class Meta:
        model = FriendRequest
        fields = ['from_user', 'to_user', 'created_at', 'accepted']
    
    def validate(self, attrs):
        if attrs['from_user'] == attrs['to_user']:
            raise serializers.ValidationError("Cannot send a friend request to yourself.")
        return attrs
