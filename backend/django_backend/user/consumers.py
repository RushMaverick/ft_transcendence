from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import sync_to_async
from .models import OnlineStatus
from django.utils import timezone
from rest_framework.response import Response

# OnlineConsumer Model:
# This file will contain the code for our WebSocket consumer, which will handle incoming WebSocket connections.
# Basically we have two methods connect and disconnect. We have to be really careful because the methods must be
# named 'connect' and 'disconnect' exactly as shown here, otherwise Django will not recognize them and it may cause 
# issues. We use AsyncWebsocketConsumer, which means that Django will handle all WebSocket connections concurrently,
# without waiting for one to finish before handling the next one. 
# 
# In the connect method, we first check if the user is authenticated. If everything is alright,
# we call set_user_online with the user instance to update their online status.
# 
# Similarly, in the disconnect method, we call set_user_offline when the WebSocket is disconnected,
# updating the user's online status accordingly.

class OnlineConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope['user']
        if self.user.is_authenticated:
            await self.set_user_online(self.user)
            await self.accept()
        else:
            await self.close()

    async def disconnect(self, close_code):
        if self.user.is_authenticated:
          await self.set_user_offline(self.user)
    
    async def receive(self):
       pass
    
    @sync_to_async
    def set_user_online(self,user):
        try:
            connect_user = OnlineStatus.objects.get(user=user)
        except OnlineStatus.DoesNotExist:
            connect_user = OnlineStatus.objects.create(user=user)
        connect_user.is_online = True
        connect_user.last_connection = timezone.now()
        connect_user.save()

    @sync_to_async
    def set_user_offline(self,user):
        try:
            disconnect_user = OnlineStatus.objects.get(user=user)
            disconnect_user.is_online = False
            disconnect_user.last_connection = timezone.now()
            disconnect_user.save()
        except OnlineStatus.DoesNotExist:
            pass