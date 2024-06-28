from channels.generic.websocket import WebsocketConsumer
from django.contrib.auth.models import User

class OnlineConsumer(WebsocketConsumer):
    def connect(self):
        self.scope['user']
    def discconected(self,close_code):
        pass

