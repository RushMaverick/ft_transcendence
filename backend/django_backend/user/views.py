from django.contrib.auth.models import  User
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import UserSerializer, PasswordUpdateSerializer, AvatarSerializer, OnlineStatusSerializer
from .permissions import IsAuthenticatedOrCreateOnly, IsUser
from .models import Avatar, OnlineStatus


#OnlineStatusView:

# In this view, we have a get method:
# Then we have 2 GET methods, which means we are asking for information:
#   - First, we try to get the Online Status of a user, if the user has not been registered then we throw an exception.
#   - If the User exists then we return the user status, which have the info define in the serializer fields.
class OnlineStatusView(APIView):
    permission_classes = [IsAuthenticatedOrCreateOnly]

    def get(self,request,userID):
        try:
            user_status = OnlineStatus.objects.get(user_id=userID)
        except OnlineStatus.DoesNotExist:
            return Response({"Warning": "User not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = OnlineStatusSerializer(user_status)
        return Response({"User_status": serializer.data}, status=status.HTTP_200_OK)

class AvatarViewSet(APIView):
    serializer_class = AvatarSerializer
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request, *args, **kwargs):
        "Return the current avatar"
        user = request.user
        avatar = Avatar.objects.filter(user=user).first()
        if(avatar):
            serializer = self.serializer_class(instance=avatar, context={'request': request})
            return Response(serializer.data)
        else:
            return Response({"error": "No avatar found."}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request, format=None):
        "Upload avatar, or update the avatar"
        user = request.user
        serializer = self.serializer_class(data=request.data, context={'request': request})
        if(serializer.is_valid()):
            old_avatar = Avatar.objects.filter(user=user).first()
            if(old_avatar):
                if old_avatar.image.name != 'default/default.jpg':
                    old_avatar.image.delete() 
                old_avatar.delete()
            serializer.save(user=user)
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
        user = serializer.instance
        # OnlineStatus.objects.create(user=user, is_online=False)
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

    # search_user method:
    # This method is part of the user management, and this allow us to find an user by the username
    # so we need to provide the username, if the username exist then we return the user and his information
    # in other case we just said user not found
    @action(detail=False, methods=['get'], url_path='search')
    def search_user(self, request):
        username = request.query_params.get('username')
        if not username:
            return Response({"detail": "Username parameter is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({"detail": "User not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
