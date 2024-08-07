from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AvatarViewSet, OnlineStatusView, SettingsViewSet

router = DefaultRouter()
router.register(r'settings', SettingsViewSet, basename='settings')

urlpatterns = [
    path('avatar/', AvatarViewSet.as_view(), name='avatar'),
    path('online-status/<int:userID>/', OnlineStatusView.as_view(), name='online_status'),
    path('', include(router.urls)),
]