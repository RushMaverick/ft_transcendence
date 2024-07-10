import json
from channels.generic.websocket import AsyncWebsocketConsumer

class TournamentConsumer(AsyncWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)


    async def connect(self):
        # user = self.scope['user']
        # print(f"User: {user}")
        # if not user.is_authenticated:
        #     print("User not authenticated")
        #     await self.close()

        self.tournament_room = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = f"tournament_{self.tournament_room}"

        # Socket stuff
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)

        # await self.channel_layer.group_send(
		# 	self.room_group_name, {"type": "broadcast.message", "hmm": "hello"}
		# )

        print (f"Connected to {self.room_group_name}", flush=True)
        await self.accept()


    async def disconnect(self, close_code):
        print(f"disconnected from room {self.game_room}", flush=True)
        # Leave room group
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)


    async def receive(self, text_data):
        try:
            json_data = json.loads(text_data)
            cmd = json_data.get("cmd")
            # cmd_args = json_data.get("cmd_args")
        except:
            print("Invalid command", flush=True)
            return
        if (cmd == "stop"):
            pass
        elif (cmd == "start"):
            pass


    async def broadcast_message(self, event):
        # Send message to WebSocket
        await self.send(text_data=json.dumps({'msg': event}))

