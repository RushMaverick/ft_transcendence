from django.urls import path, include
from rest_framework import routers
from .views import RoomOneViewSet

router = routers.DefaultRouter()
router.register('api/rooms/', RoomOneViewSet, 'Room')

urlpatterns = [
    path('', RoomOneViewSet.as_view({'get':'get_room'}), name='get_user_room'),
    path('one_vs_one_invitation/',RoomOneViewSet.as_view({'post':'send_request'}), name='send_room_invitation'),
    path('create_room/',RoomOneViewSet.as_view({'post':'create_room'}), name='create_room'),
    path('<int:pk>/accept_request/',RoomOneViewSet.as_view({'post':'accept_request'}), name='accept_invitation_request'),
    path('<int:pk>/reject_request/',RoomOneViewSet.as_view({'post':'reject_request'}), name='reject_invitation_request'),
    path('list_request/', RoomOneViewSet.as_view({'get': 'list_invitation_request'}), name='list_invitation_request'),
    path('<int:pk>/delete/', RoomOneViewSet.as_view({'delete': 'delete_room'}), name='delete_room'),
]
