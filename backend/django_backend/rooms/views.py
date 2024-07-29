from django.shortcuts import render
from django.contrib.auth.models import  User 
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import InvitationSerializer, RoomSerializer
from user.permissions import IsAuthenticatedOrCreateOnly, IsUser
from .models import InvitationRequest, Room

# Create your views here.

class RoomOneViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    permission_classes = [IsAuthenticatedOrCreateOnly, IsUser]

    """Create a room"""
    @action(detail=False, methods=['post'], permission_classes=[IsAuthenticatedOrCreateOnly, IsUser])
    def create_room(self, request):
        user = request.user
        if user.rooms.exists():
            return Response({"Warning": "User is already in a room."}, status=status.HTTP_400_BAD_REQUEST)
        room = Room.objects.create()
        room.users.add(user)
        room.save()

        serializer = RoomSerializer(room)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    """Send invitation request for a room"""
    @action(detail=False, methods=['post'], permission_classes=[IsAuthenticatedOrCreateOnly, IsUser])
    def send_request(self, request):
        user = request.user
        if(user.is_authenticated == False):
            return(Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED))
        
        guest_username = request.data.get('guest')
        if not guest_username:
            return Response({"Warning": "Guest user is required."}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            guest = User.objects.get(username=guest_username)
        except User.DoesNotExist:
            return Response({"Warning": "User not found."}, status=status.HTTP_404_NOT_FOUND)
        
        if(guest.rooms.exists()):
            return Response({"Warning": "Guest is already in a room."}, status=status.HTTP_400_BAD_REQUEST)
        
        if user == guest:
            return Response({"Warning": "You cannot send a invitation request to yourself."}, status=status.HTTP_400_BAD_REQUEST)
        
        room = user.rooms.first()
        if room is None:
            return Response({"Warning": "User is not in any room."}, status=status.HTTP_400_BAD_REQUEST)
        
        if room.is_full():
            return Response({"Warning": "Room is full."}, status=status.HTTP_400_BAD_REQUEST)
        
        if InvitationRequest.objects.filter(from_user=user, to_user=guest, room=room, accepted=False).exists() or InvitationRequest.objects.filter(from_user=guest, to_user=user, room=room,  accepted=False).exists():
            return Response({"Warning": "This Invitation Request has already been sent or received."}, status=status.HTTP_200_OK)
        elif InvitationRequest.objects.filter(from_user=user, to_user=guest, room=room, accepted=True).exists() or InvitationRequest.objects.filter(from_user=guest, to_user=user,  room=room, accepted=True).exists():
            return Response({"Detail": "They are in the same room"}, status=status.HTTP_200_OK)
        
        invitation_request = InvitationRequest.objects.create(from_user=user, to_user=guest, room=room, accepted=False)
        serializer = InvitationSerializer(invitation_request)
        return Response({"Detail": "Invitation request sent successfully.","Invitation_request":serializer.data}, status=status.HTTP_201_CREATED)
    
    """Accept Invitation request"""
    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticatedOrCreateOnly, IsUser])
    def accept_request(self,request, pk=None):
        if not request.user.is_authenticated:
            return Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED)
        try:
            invitation_request = InvitationRequest.objects.get(id=pk, to_user=request.user, accepted=False)
        except InvitationRequest.DoesNotExist:
            return Response({"Warning":"This Invitation Request Does not Exist or has been accepted"}, status=status.HTTP_404_NOT_FOUND)
        invitation_request.accepted = True
        invitation_request.save()
        room = invitation_request.room
        room.users.add(request.user)
        room.save()
        serializer = RoomSerializer(room)
        return Response({"detail": "Invitation request accepted.","Room":serializer.data}, status=status.HTTP_200_OK)
    
    """Reject invitation request"""
    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticatedOrCreateOnly, IsUser])
    def reject_request(self,request, pk=None):
        if not request.user.is_authenticated:
            return Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED)
        try:
            invitation_request = InvitationRequest.objects.get(id=pk, to_user=request.user, accepted=False)
            invitation_request.delete()
        except InvitationRequest.DoesNotExist:
            return Response({"Warning":"This Invitation Request Does not Exist or has been accepted"}, status=status.HTTP_404_NOT_FOUND)
        

        return Response({"detail": "Invitation request rejected."}, status=status.HTTP_200_OK)
    