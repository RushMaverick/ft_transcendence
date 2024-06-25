from django.contrib.auth.models import  User 
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import FriendsSerializer
from user.permissions import IsAuthenticatedOrCreateOnly, IsUser
from .models import FriendRequest

class FriendsViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = FriendsSerializer
    permission_classes = [IsAuthenticatedOrCreateOnly, IsUser]

    """Send friend request"""
    @action(detail=False, methods=['post'], permission_classes=[IsAuthenticatedOrCreateOnly, IsUser])
    def send_request(self, request):
        user = request.user
        if(user.is_authenticated == False):
            return(Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED))
        
        friend = request.data.get('friend')
        if not friend:
            return Response({"Warning": "friend user is required."}, status=status.HTTP_400_BAD_REQUEST)
        try:
            friend_user = User.objects.get(username=friend)
        except User.DoesNotExist:
            return Response({"Warning": "User not found."}, status=status.HTTP_404_NOT_FOUND)

        if user == friend_user:
            return Response({"Warning": "You cannot send a friend request to yourself."}, status=status.HTTP_400_BAD_REQUEST)
        
        friend_request = FriendRequest.objects.create(from_user=user, to_user=friend_user, accepted=False)
        serializer = FriendsSerializer(friend_request)
        return Response({"detail": "Friend request sent successfully.","friend_request":serializer.data}, status=status.HTTP_201_CREATED)
    
    """Accept friend request"""
    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticatedOrCreateOnly, IsUser])
    def accept_request(self,request, pk=None):
        if not request.user.is_authenticated:
            return Response({"Warning": "User is not authenticated."}, status=status.HTTP_401_UNAUTHORIZED)
        try:
            friend_request = FriendRequest.objects.get(id=pk, to_user=request.user, accepted=False)
        except FriendRequest.DoesNotExist:
            return Response({"Warning":"This Friend Request Does not Exist or has been accepted"}, status=status.HTTP_404_NOT_FOUND)
        friend_request.accepted = True
        friend_request.save()
        serializer = FriendsSerializer(friend_request)
        return Response({"detail": "Friend request accepted.","friend_request":serializer.data}, status=status.HTTP_200_OK)
            