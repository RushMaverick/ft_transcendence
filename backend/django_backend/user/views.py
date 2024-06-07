from django.contrib.auth.models import  User 
from rest_framework import status, viewsets, permissions
from rest_framework.response import Response
from .serializers import UserSerializer, PasswordUpdateSerializer, AvatarSerializer
from .permissions import IsAuthenticatedOrCreateOnly, IsUser
from .models import Avatar
from rest_framework.parsers import MultiPartParser


class AvatarViewSet(viewsets.ModelViewSet):
    queryset = Avatar.objects.all()
    serializer_class = AvatarSerializer
    parser_classes = [MultiPartParser]

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