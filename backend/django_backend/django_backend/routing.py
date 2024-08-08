from django.urls import re_path

from pong import consumers as game_consumers
from user import consumers as online_consumer
from tournaments import consumers as tournament_consumers

websocket_urlpatterns = [
    re_path(r"ws/game/(?P<room_id>\d+)/$", game_consumers.GameConsumer.as_asgi()),
    re_path(r"ws/online_status/$", online_consumer.OnlineConsumer.as_asgi()),
    re_path(r"ws/tournament/(?P<tournament_id>\w+)/$", tournament_consumers.TournamentConsumer.as_asgi()),
]
