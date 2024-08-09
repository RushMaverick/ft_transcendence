from django.urls import path, include
from .views import TournamentListView, TournamentDetailView, RoundViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'(?P<tournament_id>\d+)/rounds', RoundViewSet, basename='rounds')
urlpatterns = [
    path('', TournamentListView.as_view()),
    path('<int:id>/', TournamentDetailView.as_view()),
    # path('joined/', list_registered_tournaments),
    path('', include(router.urls)),
]
