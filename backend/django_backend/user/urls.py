from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AvatarViewSet

urlpatterns = [
    path('avatar/', AvatarViewSet.as_view(), name='avatar'),
]