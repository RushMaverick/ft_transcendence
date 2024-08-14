from django.urls import path, include
from .views import MatchListView, PlayerMatchListView, StatsViewSet

urlpatterns = [
    path('', MatchListView.as_view(), name='match-list'),
    path('stats/<int:user_id>/', StatsViewSet.as_view(), name='stats-list'),
	path('player/<int:user_id>/', PlayerMatchListView.as_view(), name='match-player-list'),
]

