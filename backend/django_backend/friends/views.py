from django.contrib.auth.models import  User 
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import FriendsSerializer, FriendsListSerializer
from user.permissions import IsAuthenticatedOrCreateOnly, IsUser
from .models import FriendRequest


#FriendViewSet:

# In this view, we have two POST methods:
# 
# - send_request: This method handles sending a friend request.
#   - First, it gets the currently logged-in user and checks if they are authenticated.
#   - Next, it requires the username of the friend to be provided via Postman or another client.
#   - The method checks if this username exists in the User model.
#   - If the username exists and the user is valid, a friend request is created in the database.
#   - The method then returns a response indicating that the friend request has been successfully sent.
# 
# - accept_request: This method handles accepting a friend request.
#   - The logged-in user who wants to accept the request must be authenticated.
#   - The method takes the ID of the friend request and checks if it exists and has not yet been accepted (accepted=False).
#   - If the friend request does not exist or has already been accepted, an exception is thrown.
#   - If everything is in order, the method sets accepted=True for the friend request, marking it as accepted.
#   - A response is returned to confirm that the friend request has been accepted.
# 
# Then we have 2 GET methods, which means we are asking for information:
# - list_friends: This method returns the list of friends for the logged-in user. 
#   Here's how it works:
#   - First, it identifies the friend requests in which the current user is involved. This includes friend requests where the user is the sender (from_user) 
#     or the receiver (to_user).
#   - It checks if the 'accepted' field is set to True, indicating that the friend request has been accepted.
#   - Once it has identified these requests, it extracts the IDs of the other users who are part of these accepted friend requests.
#   - Using these user IDs, it queries the User model to get the details of the users who are friends with the current user, and stores them in a variable called 'friends'.
#   - Finally, it returns the list of friends.
class FriendsViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = FriendsSerializer
    permission_classes = [IsAuthenticatedOrCreateOnly, IsUser]

    """Return the list of the pending friend requests"""
    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticatedOrCreateOnly, IsUser])
    def list_friends_request(self, request):
        user = request.user
        if(user.is_authenticated == False):
            return(Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED))
        
        pending_request = FriendRequest.objects.filter(to_user=user, accepted=False)
        if not pending_request.exists():
            return Response({"Detail": "No pending friend requests."}, status=status.HTTP_200_OK)

        serializer = FriendsSerializer(pending_request, many=True)
        return Response({"Pending Friend request": serializer.data}, status=status.HTTP_200_OK)

    """Return the list of the friends"""
    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticatedOrCreateOnly, IsUser])
    def list_friends(self, request):
        user = request.user
        if(user.is_authenticated == False):
            return(Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED))
        friends_from = FriendRequest.objects.filter(from_user=user,accepted=True).values_list('to_user', flat=True)
        friends_to = FriendRequest.objects.filter(to_user=user, accepted=True).values_list('from_user', flat=True)

        friend_ids = list(set(friends_from).union(set(friends_to)))
        friends = User.objects.filter(id__in=friend_ids)
        serializer = FriendsListSerializer(friends, many=True)
        return Response({"friends": serializer.data}, status=status.HTTP_200_OK)

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
            return Response({"Warning": "Anonimus User"}, status=status.HTTP_401_UNAUTHORIZED)
        try:
            friend_request = FriendRequest.objects.get(id=pk, to_user=request.user, accepted=False)
        except FriendRequest.DoesNotExist:
            return Response({"Warning":"This Friend Request Does not Exist or has been accepted"}, status=status.HTTP_404_NOT_FOUND)
        friend_request.accepted = True
        friend_request.save()
        serializer = FriendsSerializer(friend_request)
        return Response({"detail": "Friend request accepted.","friend_request":serializer.data}, status=status.HTTP_200_OK)
            