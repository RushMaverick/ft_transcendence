from django.urls import path
from .views import list_tournaments, create_tournament, join_tournament, list_registered_tournaments, get_tournament

urlpatterns = [
    path('', list_tournaments),
    path('<int:id>/', get_tournament),
    path('create/', create_tournament),
    path('join/<int:tournament_id>/', join_tournament),
    path('joined/', list_registered_tournaments),
]
