from channels.generic.websocket import AsyncWebsocketConsumer
from django.contrib.auth.models import User
from asgiref.sync import sync_to_async
from .models import OnlineStatus
from django.utils import timezone

class OnlineConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.user = self.scope['user']
        if self.user.is_authenticated:
          await self.set_user_online(self.user)
        await self.accept()
    async def disconect(self, close_code):
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