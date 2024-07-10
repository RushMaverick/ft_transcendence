from django.urls import path
# from .views import list_tournaments, create_tournament, join_tournament, list_registered_tournaments, get_tournament
from .views import TournamentListView, TournamentDetailView, join_tournament, list_registered_tournaments

urlpatterns = [
    path('', TournamentListView.as_view()),
    path('<int:id>/', TournamentDetailView.as_view()),
    # path('create/', create_tournament),
    path('join/<int:tournament_id>/', join_tournament),
    path('joined/', list_registered_tournaments),
]
