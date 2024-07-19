from django.shortcuts import render
from django.contrib.auth.models import  User 
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import InvitationSerializer
from user.permissions import IsAuthenticatedOrCreateOnly, IsUser
from .models import InvitationRequest

# Create your views here.

class FriendsViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = InvitationSerializer
    permission_classes = [IsAuthenticatedOrCreateOnly, IsUser]

    """Send invitation request for a room"""
    @action(detail=False, methods=['post'], permission_classes=[IsAuthenticatedOrCreateOnly, IsUser])
    def send_request(self, request):
        user = request.user
        if(user.is_authenticated == False):
            return(Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED))
        
        guest = request.data.get('guest')
        if not guest:
            return Response({"Warning": "Guest user is required."}, status=status.HTTP_400_BAD_REQUEST)
        try:
            guest_username = User.objects.get(username=guest)
        except User.DoesNotExist:
            return Response({"Warning": "User not found."}, status=status.HTTP_404_NOT_FOUND)

        if user == guest_username:
            return Response({"Warning": "You cannot send a invitation request to yourself."}, status=status.HTTP_400_BAD_REQUEST)
        
        if InvitationRequest.objects.filter(from_user=user, to_user=guest_username, accepted=False).exists() or InvitationRequest.objects.filter(from_user=guest_username, to_user=user,  accepted=False).exists():
            return Response({"Warning": "This Invitation Request has already been sent or received."}, status=status.HTTP_200_OK)
        elif InvitationRequest.objects.filter(from_user=user, to_user=guest_username, accepted=True).exists() or InvitationRequest.objects.filter(from_user=guest_username, to_user=user,  accepted=True).exists():
            return Response({"Detail": "They are in the same room"}, status=status.HTTP_200_OK)
        
        invitation_request = InvitationRequest.objects.create(from_user=user, to_user=guest_username, accepted=False)
        serializer = InvitationSerializer(invitation_request)
        return Response({"Detail": "Friend request sent successfully.","friend_request":serializer.data}, status=status.HTTP_201_CREATED)