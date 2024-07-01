from django.urls import path, include
from rest_framework import routers
from .views import FriendsViewSet

router = routers.DefaultRouter()
router.register('friends', FriendsViewSet, 'friend')


urlpatterns = [
    path('', include(router.urls)),
    path('send_request/',FriendsViewSet.as_view({'post':'send_request'}), name='send_friend_request'),
    path('<int:pk>/accept_request/',FriendsViewSet.as_view({'post':'accept_request'}), name='accept_friend_request'),
    path('list/', FriendsViewSet.as_view({'get': 'list_friends'}), name='list_friends'),
    path('list_request/', FriendsViewSet.as_view({'get': 'list_friends_request'}), name='list_friends_request'),
]
