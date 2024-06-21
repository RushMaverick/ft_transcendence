from django.shortcuts import render
from django.contrib.auth.models import  User 
from rest_framework import status, viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import FriendsSerializer
from .models import FriendRequest

# Create your views here.

class FriendsViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = FriendsSerializer

    """Send friend request"""
    def send_request(self, request):
        user = request.user
        to_user = request.data.get('to_user')

        if not to_user:
            return Response({"detail": "to_user is required."}, status=status.HTTP_400_BAD_REQUEST)
        try:
            send_to_user = User.objects.get(username=to_user)
        except User.DoesNotExist:
            return Response({"detail": "User not found."}, status=status.HTTP_404_NOT_FOUND)

        # Prevent sending a friend request to oneself
        if user == send_to_user:
            return Response({"detail": "You cannot send a friend request to yourself."}, status=status.HTTP_400_BAD_REQUEST)
        friend_request = FriendRequest.objects.create(from_user=user, to_user=send_to_user)
        return Response({"detail": "Friend request sent successfully."}, status=status.HTTP_201_CREATED)