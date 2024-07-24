from django.urls import path, include
from rest_framework import routers
from .views import InvitationViewSet

router = routers.DefaultRouter()
router.register('api/rooms/', InvitationViewSet, 'Room')

urlpatterns = [
    path('', include(router.urls)),
    path('room_invitation/',InvitationViewSet.as_view({'post':'send_request'}), name='send_room_invitation'),  
]