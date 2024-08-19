from .TournamentConsumerHelpers import create_match, \
    create_round, \
    change_tournament_status, \
    add_participant, \
    get_participants, \
    remove_participant, \
    add_match_to_round, \
    get_match

from pong.signals import match_completed

from channels.layers import get_channel_layer

import asyncio

class Tournament():
    def __init__(self, tournament):
        self.tournament = tournament
        self.participants = {}
        self.id = tournament.get("id")
        self.room_group_name = f"tournament_{self.id}"
        self.name = self.tournament.get("name")
        self.channel_layer = get_channel_layer()
        self.round_nbr = 0
        self.round_id = None
        self.status = "open"
        self.match_completed = {}
        self.connect_match_completed_handler()
        self.all_matches_completed_event = asyncio.Event()

    def connect_match_completed_handler(self):
        """
        Connects the handler function to the match_completed signal.
        """
        def handle_match_completed(sender, **kwargs):
            match_id = kwargs.get('match_id')
            winner = kwargs.get('winner')
            # Add additional logic here to handle the match completion, e.g., updating tournament standings
            self.match_completed[int(match_id)] = True
                # Check if all matches are completed
            if self.matches_done():
                self.all_matches_completed_event.set()

        # Connect the handler function to the signal
        match_completed.connect(handle_match_completed)

    async def broadcast_participants(self):
        participants = await get_participants(self.id)
        if not participants:
            return
        await self.channel_layer.group_send(
            self.room_group_name, {"type": "broadcast.message", "msg": {"participants": participants}}
        )

    async def add_participant(self, player_id, channel_name, channel_layer):

        participant = await add_participant(self.id, player_id)
        if not participant:
            await remove_participant(self.id, player_id)
            participant = await add_participant(self.id, player_id)
            # return None
        self.participants[player_id] = {"participant": participant, "channel_name": channel_name, "channel_layer": channel_layer}
        # Broadcast that user has joined the tournament room
        await channel_layer.group_add(self.room_group_name, channel_name)
        await channel_layer.group_send(
        	self.room_group_name, {"type": "broadcast.message", "msg": f"{participant} joined the tournament"}
        )
        return participant

    async def remove_participant(self, player_id):
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
            raise Exception("Error creating round")
        self.round_nbr += 1
        # return  self.round_id

    async def first_round(self):
        await self.create_round()
        participant_keys = list(self.participants.keys())
        for i in range(0, len(participant_keys), 2):
            player1 = self.participants[participant_keys[i]]["participant"]
            player1_channel_name = self.participants[participant_keys[i]]["channel_name"]
            player2 = self.participants[participant_keys[i+1]]["participant"]
            player2_channel_name = self.participants[participant_keys[i+1]]["channel_name"]
            match_id = await create_match(self.id, self.round_id, player1.id, player2.id)
            if not match_id:
                raise Exception("Error creating match")
            await add_match_to_round(self.round_id, match_id)
            self.match_completed[match_id] = False
            # notify pong players that match has been created
            game_room_name = f"match_{match_id}"
            await self.channel_layer.send(
                 player1_channel_name, {"type": "broadcast.message", "msg": {"match_id": match_id, "room_name": game_room_name}}
            )
            await self.channel_layer.send(
                player2_channel_name, {"type": "broadcast.message", "msg": {"match_id": match_id, "room_name": game_room_name}}
            )

    async def second_round(self):
        await self.create_round()
        # get winners from first round
        winners = []
        for match_id, completed in self.match_completed.items():
                if completed:
                    match = await get_match(match_id)
                    winners.append(match.get("winner"))
        # pair winners
        for i in range(0, len(winners), 2):
            player1 = self.participants[winners[i].get("id")]["participant"]
            player1_channel_name = self.participants[winners[i].get("id")]["channel_name"]
            player2 = self.participants[winners[i+1].get("id")]["participant"]
            player2_channel_name = self.participants[winners[i+1].get("id")]["channel_name"]
            match_id = await create_match(self.id, self.round_id, player1.id, player2.id)
            if not match_id:
                raise Exception("Error creating match")
            await add_match_to_round(self.round_id, match_id)
            self.match_completed = {}
            self.match_completed[match_id] = False
            # notify pong players that match has been created
            game_room_name = f"match_{match_id}"
            await self.channel_layer.send(
                 player1_channel_name, {"type": "broadcast.message", "msg": {"match_id": match_id, "room_name": game_room_name}}
            )
            await self.channel_layer.send(
                player2_channel_name, {"type": "broadcast.message", "msg": {"match_id": match_id, "room_name": game_room_name}}
            )

    def matches_done(self):
            all_completed = all(value for value in self.match_completed.values())
            return all_completed

    async def wait_for_all_matches_to_complete(self):
        while True:
            if not self.match_completed:
                await asyncio.sleep(1)
                continue
            all_completed = all(value for value in self.match_completed.values())
            if all_completed:
                # self.all_matches_completed_event.set()  # Signal that all matches are completed
                break
            await asyncio.sleep(1)  # Wait for a short period before checking again

    async def get_winners(self):
        winners = []
        for match_id, completed in self.match_completed.items():
            if completed:
                match = await get_match(match_id)
                winners.append(match.get("winner"))
        return winners

    async def start(self):
        if await change_tournament_status(self.id, "started") == False:
            return
        self.status = "started"

        try:
            await self.channel_layer.group_send(
                self.room_group_name, {"type": "broadcast.message", "msg": "Tournament started"}
            )
        except Exception as e:
            print(f"tournament:start:Error sending tournament started message: {e}", flush=True)
        try:
            await self.first_round()
        except Exception as e:
            return
        await self.all_matches_completed_event.wait()
        self.all_matches_completed_event.clear()
        try:
            await self.second_round()
        except Exception as e:
            return
        await self.all_matches_completed_event.wait()
        self.all_matches_completed_event.clear()

        # #Broadcast that tournament is over and winner
        winners = await self.get_winners()
        await self.channel_layer.group_send(
            self.room_group_name, {"type": "broadcast.message", "msg": {"winner": winners[0]}}
        )
        await change_tournament_status(self.id, "completed")
