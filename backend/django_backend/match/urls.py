from django.urls import path, include
from .views import MatchListView, PlayerMatchListView

urlpatterns = [
    path('', MatchListView.as_view(), name='match-list'),
	path('player/<int:user_id>/', PlayerMatchListView.as_view(), name='match-player-list'),
]

