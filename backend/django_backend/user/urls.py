from django.urls import path, include
from rest_framework.routers import DefaultRouter
from.views import AvatarViewSet

# Create a router and register our viewset with it.
router = DefaultRouter()
router.register(r'avatar', AvatarViewSet)

# The urlpatterns now includes the router's URLs.
urlpatterns = [
    path('', include(router.urls)),
]