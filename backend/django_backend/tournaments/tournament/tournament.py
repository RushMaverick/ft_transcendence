from .TournamentConsumerHelpers import create_match, \
    create_round, \
    get_tournament, \
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
        # self.max_participants = self.tournament["max_participants"]
        self.id = tournament.get("id")
        self.room_group_name = f"tournament_{self.id}"
        self.name = self.tournament.get("name")
        self.channel_layer = get_channel_layer()
        self.round_nbr = 0
        self.round_id = None
        # self.status = None
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
            print(f"Received match completed signal for match {match_id} with winner {winner}", flush=True)
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
        #todo: check that tournament is open and check max number of participants
        # Check max number of participants
        # if self.tournament.max_participants <= len(self.tournament.participants):
        #     print(f"Tournament {self.tournament_id} is full", flush=True)
        #     return await self.close()

        # Check that tournament is open
        # if self.tournament.status == "closed":
        #     #print(f"Tournament {self.tournament_id} is not open", flush=True)
        #     await self.close()
        #     return

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
        # #print("remove_participant", flush=True)
        # #print(f"player_id: {player_id}", flush=True)
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
            #print("Error creating round", flush=True)
            raise Exception("Error creating round")
        self.round_nbr += 1
        # return  self.round_id

    async def first_round(self):
        await self.create_round()
        #print(f"pair_players participants: {self.participants}", flush=True)
        participant_keys = list(self.participants.keys())
        # print(f": {participant_keys}", flush=True)
        for i in range(0, len(participant_keys), 2):
            player1 = self.participants[participant_keys[i]]["participant"]
            # print(f"player1: {player1.__dict__}", flush=True)
            player1_channel_name = self.participants[participant_keys[i]]["channel_name"]
            print(f"player1_channel_name: {player1_channel_name}", flush=True)
            player2 = self.participants[participant_keys[i+1]]["participant"]
            # print(f"player2: {player2.__dict__}", flush=True)
            player2_channel_name = self.participants[participant_keys[i+1]]["channel_name"]
            print(f"player2_channel_name: {player2_channel_name}", flush=True)
            #print(f"player1: {player1}, player2: {player2}", flush=True)
            # #print(f"pair1 player1_id: {player1.get("id")}, player2_id: {player2.get("id")}", flush=True)
            #print(f"pair2 player1_id: {player1.id}, player2_id: {player2.id}", flush=True)
            match_id = await create_match(self.id, self.round_id, player1.id, player2.id)
            print("await create_match", flush=True)
            if not match_id:
                #print("Error creating match", flush=True)
                raise Exception("Error creating match")
            #print(f"match: {match_id}", flush=True)
            #print(f"round: {self.round_id}", flush=True)
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
        print(f"tadaaa", flush=True)

    async def second_round(self):
        print("tournament:second_round", flush=True)
        await self.create_round()
        # get winners from first round
        #print("second round", flush=True)
        winners = []
        for match_id, completed in self.match_completed.items():
                if completed:
                    match = await get_match(match_id)
                    winners.append(match.get("winner"))

        print(f"tournament:second_round:winners: {winners}", flush=True)
        # print(f"tournament:second_round:winners[0].id: {winners[0].get("id")}", flush=True)
        # pair winners
        for i in range(0, len(winners), 2):
            player1 = self.participants[winners[i].get("id")]["participant"]
            print(f"tournament:second_round:player1: {player1}", flush=True)
            player1_channel_name = self.participants[winners[i].get("id")]["channel_name"]
            print(f"tournament:second_round:player1_channel_name: {player1_channel_name}", flush=True)
            player2 = self.participants[winners[i+1].get("id")]["participant"]
            print(f"tournament:second_round:player2: {player2}", flush=True)
            player2_channel_name = self.participants[winners[i+1].get("id")]["channel_name"]
            print(f"tournament:second_round:player2_channel_name: {player2_channel_name}", flush=True)
            match_id = await create_match(self.id, self.round_id, player1.id, player2.id)
            if not match_id:
                print("tournament:second_round:Error creating match", flush=True)
                raise Exception("Error creating match")
            #print(f"match: {match_id}", flush=True)
            #print(f"round: {self.round_id}", flush=True)
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
            print(f"tournament:second_round:match_id: {match_id}", flush=True)

    def matches_done(self):
            print ("tournament:matches_done: ", self.match_completed, flush=True)
            all_completed = all(value for value in self.match_completed.values())
            print("tournament:matches_done:all_completed: ", all_completed, flush=True)
            return all_completed

    async def wait_for_all_matches_to_complete(self):
        print("Waiting for all matches to complete", flush=True)
        print(f"match_completed: {self.match_completed}", flush=True)
        while True:
            if not self.match_completed:
                await asyncio.sleep(1)
                continue
            all_completed = all(value for value in self.match_completed.values())
            # print("all_completed: ", all_completed, flush=True)
            if all_completed:
                # self.all_matches_completed_event.set()  # Signal that all matches are completed
                break
            await asyncio.sleep(1)  # Wait for a short period before checking again
        print("All matches completed in this round.", flush=True)

    async def get_winners(self):
        winners = []
        for match_id, completed in self.match_completed.items():
            if completed:
                match = await get_match(match_id)
                winners.append(match.get("winner"))
        return winners

    async def start(self):
        # Check that tournament has not started
        # if self.tournament.status == "open":
        #     #print("Tournament already started", flush=True)
        #     return

        # Check that tournament has enough participants
        # participants = await get_participants(self.tournament_id)
        # #print(f"participants: {participants}", flush=True)
        # if len(participants) != 4:
        #     #print("Not enough participants", flush=True)
        #     return

        # Close tournament
        # TournamentSerializer(tournament, data={"status": "closed"}, partial=True)
        # if not tournament_serializer.is_valid():
        #     #print(tournament_serializer.errors, flush=True)
        #     return
        # tournament_serializer.save()
        # #print(tournament_serializer.data, flush=True)
        print("tournament:start:Participants: ", self.participants, flush=True)
        try:
            await self.channel_layer.group_send(
                self.room_group_name, {"type": "broadcast.message", "msg": "Tournament started"}
            )
        except Exception as e:
            print(f"tournament:start:Error sending tournament started message: {e}", flush=True)
        try:
            await self.first_round()
        except Exception as e:
            #print(f"Error pairing players: {e}", flush=True)
            return
        print("tournament:start:#1", flush=True)
        await self.all_matches_completed_event.wait()
        self.all_matches_completed_event.clear()
        print("tournament:start:#2", flush=True)
        try:
            await self.second_round()
        except Exception as e:
            #print(f"Error pairing players: {e}", flush=True)
            return
        print("tournament:start:#3", flush=True)
        await self.all_matches_completed_event.wait()
        self.all_matches_completed_event.clear()
        print("tournament:start:#4", flush=True)

        # #Broadcast that tournament is over and winner
        winners = await self.get_winners()
        await self.channel_layer.group_send(
            self.room_group_name, {"type": "broadcast.message", "msg": f"Tournament over. Winner: {winners[0]}"}
        )

