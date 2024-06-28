from django.shortcuts import render
from django.contrib.auth.models import  User
from rest_framework import status, viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import UserSerializer, PasswordUpdateSerializer, AvatarSerializer, MatchSerializer, OnlineStatusSerializer
from .permissions import IsAuthenticatedOrCreateOnly, IsUser
from .models import Avatar, Match, OnlineStatus


class OnlineStatusView(APIView):
    permission_classes = [IsAuthenticatedOrCreateOnly]

    def get(self,request,userID):
        try:
            user_status = OnlineStatus.objects.get(user_id=userID)
        except user_status.DoesNotExist:
            return Response({"Warning": "User not found."}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = OnlineStatusSerializer(user_status)
        return Response({"User_status": serializer.data}, status=status.HTTP_200_OK)

class MatchList(APIView):
    permission_classes = [IsAuthenticatedOrCreateOnly]

    def get(self, request, format=None):
        matches = Match.objects.all()
        serializer = MatchSerializer(matches, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = MatchSerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PlayerMatchesView(APIView):
    permissions_classes = [IsAuthenticatedOrCreateOnly]

    def get(self, request, user_id, formant=None):
        try:
            player = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)
        matches = Match.objects.filter(player1=player) | Match.objects.filter(player2=player)
        serializer = MatchSerializer(matches, many=True)
        return Response(serializer.data)

class AvatarViewSet(APIView):
    serializer_class = AvatarSerializer
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request, *args, **kwargs):
        "Return the current avatar"
        user = request.user
        avatar = Avatar.objects.filter(user=user).first()
        if(avatar):
            serializer = self.serializer_class(instance=avatar)
            return Response(serializer.data)
        else:
            return Response({"error": "No avatar found."}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request, format=None):
        "Upload avatar, or update the avatar"
        user = request.user
        serializer = self.serializer_class(data=request.data)
        if(serializer.is_valid()):
            old_avatar = Avatar.objects.filter(user=user).first()
            if(old_avatar):
                old_avatar.image.delete()
                old_avatar.delete()
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        "Delete Avatar"
        user = request.user
        avatar = Avatar.objects.filter(user=user).first()
        if(avatar):
            avatar.image.delete()
            avatar.delete()
            return Response({"message": "Avatar deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
        else:
            return Response({"error": "No avatar found to delete."}, status=status.HTTP_404_NOT_FOUND)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticatedOrCreateOnly, IsUser]

    def get_serializer_class(self):
        if self.action == 'partial_update':
            return PasswordUpdateSerializer
        return UserSerializer

    def list(self, request, *args, **kwargs):
        """Return the current user."""

        user = request.user
        return Response({'id': user.id, 'username': user.username }, status=status.HTTP_200_OK)

    def create(self, request, *args, **kwargs):
        """Create a new user."""

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def update(self, request, *args, **kwargs):
        """Update the current user."""

        instance = self.get_object()
        if (instance.id != request.user.id):
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        serializer = self.get_serializer(instance, data=request.data, partial=False)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def partial_update(self, request, *args, **kwargs):
        """Update the current user's password."""

        instance = self.get_object()
        if (instance.id != request.user.id):
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response({'success': 'password changed successfully'}, status=status.HTTP_200_OK)

    def destroy(self, request, *args, **kwargs):
        """Delete the current user."""

        instance = self.get_object()
        if (instance.id != request.user.id):
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
