from django.contrib.auth.models import  User
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator
from .models import Avatar

class AvatarSerializer(serializers.ModelSerializer):
    
    user_id = serializers.ReadOnlyField(source='user.id')
    class Meta:
        model = Avatar
        fields = ['user_id' ,'image', 'uploaded_on']

class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    avatar = AvatarSerializer(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'avatar', 'password', 'password2']

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        Avatar.objects.create(user=user)
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

