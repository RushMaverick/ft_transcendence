from .TournamentConsumerHelpers import create_match, \
    create_round, \
    get_tournament, \
    add_participant, \
    get_participants, \
    remove_participant, \
    add_match_to_round

from channels.layers import get_channel_layer

class Tournament():
    def __init__(self, tournament):
        self.tournament = tournament
        # if not self.tournament:
        #     print(f"Error getting tournament {tournament_id}", flush=True)
        #     return None
        self.participants = {}
        # self.max_participants = self.tournament["max_participants"]
        self.id = tournament.get("id")
        self.room_group_name = f"tournament_{self.id}"
        self.name = self.tournament.get("name")
        self.channel_layer = get_channel_layer()
        self.round_nbr = 0
        self.round_id = None
        # self.rounds = self.tournament["rounds"]
        # self.matches = self.tournament["matches"]
        # room_group_name = None
        # # players_channel_layers = {} # id: channel_layer
        # # matches = {} # id: match
        # # status = None

    async def broadcast_participants(self):
        participants = await get_participants(self.id)
        if not participants:
            return
        await self.channel_layer.group_send(
            self.room_group_name, {"type": "broadcast.message", "msg": {"participants": participants}}
        )

    async def add_participant(self, player_id, channel_name, channel_layer):
        #todo: check that tournament is open and check max number of participants
        # Check max number of participants
        # if self.tournament.max_participants <= len(self.tournament.participants):
        #     print(f"Tournament {self.tournament_id} is full", flush=True)
        #     return await self.close()

        # Check that tournament is open
        # if self.tournament.status == "closed":
        #     print(f"Tournament {self.tournament_id} is not open", flush=True)
        #     await self.close()
        #     return

        participant = await add_participant(self.id, player_id)
        if not participant:
            return None
        self.participants[player_id] = {"participant": participant, "channel_name": channel_name, "channel_layer": channel_layer}
        # Broadcast that user has joined the tournament room
        await channel_layer.group_send(
        	self.room_group_name, {"type": "broadcast.message", "msg": f"{participant} joined the tournament"}
        )
        await channel_layer.group_add(self.room_group_name, channel_name)
        return participant

    async def remove_participant(self, player_id):
        # print("remove_participant", flush=True)
        # print(f"player_id: {player_id}", flush=True)
        if player_id not in self.participants:
            return
        await remove_participant(self.id, player_id)
        await self.channel_layer.group_discard(self.room_group_name, self.participants[player_id]["channel_name"])
        await self.channel_layer.group_send(
        	self.room_group_name, {"type": "broadcast.message", "msg": f"{self.participants[player_id]['participant']} left the tournament"}
        )
        del self.participants[player_id]

    async def create_round(self):
        self.round_id = await create_round(self.id, self.round_nbr + 1)
        if not self.round_id:
            print("Error creating round", flush=True)
            raise Exception("Error creating round")
        self.round_nbr += 1
        # return  self.round_id

    async def pair_players(self):
        print(f"participants: {self.participants}", flush=True)
        participant_keys = list(self.participants.keys())
        # print(f": {participants_list[0]["participant"]}", flush=True)
        for i in range(0, len(participant_keys), 2):
            player1 = self.participants[participant_keys[i]]["participant"]
            player1_channel_name = self.participants[participant_keys[i]]["channel_name"]
            player2 = self.participants[participant_keys[i+1]]["participant"]
            player2_channel_name = self.participants[participant_keys[i+1]]["channel_name"]
            print(f"player1: {player1}, player2: {player2}", flush=True)

            match_id = await create_match(self.id, self.round_id, player1.id, player2.id)
            if not match_id:
                print("Error creating match", flush=True)
                raise Exception("Error creating match")
            print(f"match: {match_id}", flush=True)
            print(f"round: {self.round_id}", flush=True)
            await add_match_to_round(self.round_id, match_id)
            # notify pong players that match has been created
            await self.channel_layer.send(
                 player1_channel_name, {"type": "broadcast.message", "msg": {"match_id": match_id}}
            )
            await self.channel_layer.send(
                player2_channel_name, {"type": "broadcast.message", "msg": {"match_id": match_id}}
            )
            # print(f"match: {match_id}", flush=True)

    async def start(self):
        # Check that tournament has not started
        # if self.tournament.status == "open":
        #     print("Tournament already started", flush=True)
        #     return

        # Check that tournament has enough participants
        # participants = await get_participants(self.tournament_id)
        # print(f"participants: {participants}", flush=True)
        # if len(participants) != 4:
        #     print("Not enough participants", flush=True)
        #     return

        # Close tournament
        # TournamentSerializer(tournament, data={"status": "closed"}, partial=True)
        # if not tournament_serializer.is_valid():
        #     print(tournament_serializer.errors, flush=True)
        #     return
        # tournament_serializer.save()
        # print(tournament_serializer.data, flush=True)
        await self.channel_layer.group_send(
            self.room_group_name, {"type": "broadcast.message", "msg": "Tournament started"}
        )
        try:
            await self.create_round()
        except Exception as e:
            print(f"Error creating round: {e}", flush=True)
            return
        try:
            await self.pair_players()
        except Exception as e:
            print(f"Error pairing players: {e}", flush=True)
            return



