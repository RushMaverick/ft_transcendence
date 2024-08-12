from django.urls import path
from .views import AvatarViewSet, OnlineStatusView

urlpatterns = [
    path('avatar/', AvatarViewSet.as_view(), name='avatar'),
    path('online-status/<int:userID>/', OnlineStatusView.as_view(), name='online_status'),
]
