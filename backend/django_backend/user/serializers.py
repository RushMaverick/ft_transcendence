from django.contrib.auth.models import  User
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator
from .models import Avatar, OnlineStatus


class AvatarSerializer(serializers.ModelSerializer):

    class Meta:
        model = Avatar
        fields = ['image', 'uploaded_on']

        def update(self, instance: User, validated_data):
            instance.image = validated_data.get('image', instance.image)
            instance.save()
            return instance

# OnlineStatusSerializer:
# This serializer is designed to get the Online Status from an user, so for this we use model OnlineStatus
# and we use as a fields the user id, username, is_online and the last connection of the user
class OnlineStatusSerializer(serializers.ModelSerializer):
    # username = serializers.CharField(source='user.username', read_only=True)
    class Meta:
        model = OnlineStatus
        fields = ['is_online', 'last_connection']


class FriendshipSerializer(serializers.ModelSerializer):
    avatar = AvatarSerializer(read_only=True)

    class Meta:
        model = User
        fields = ['username', 'avatar']

class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, required=True)

    avatar = AvatarSerializer(read_only=True)
    online = OnlineStatusSerializer(source='online_status', read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'avatar', 'online', 'password', 'confirm_password']

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        Avatar.objects.create(user=user)
        OnlineStatus.objects.create(user=user)
        return user

    def update(self, instance: User, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.save()
        return instance

class PasswordUpdateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    new_password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirm_new_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['password', 'new_password', 'confirm_new_password']

    def validate(self, attrs):
        if attrs['new_password'] != attrs['confirm_new_password']:
            raise serializers.ValidationError("New passwords must match")
        return attrs

    def update(self, instance: User, validated_data):
        if not instance.check_password(validated_data['password']):
            raise serializers.ValidationError("Wrong password")
        instance.set_password(validated_data['new_password'])
        instance.save()
        return instance
