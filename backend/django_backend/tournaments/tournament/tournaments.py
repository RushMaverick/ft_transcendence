import asyncio

from .tournament import Tournament
from .TournamentConsumerHelpers import get_tournament


class Tournaments:
    tournaments: dict[Tournament] = {}

    @classmethod
    async def create_tournament(cls, tournament_id):
        print("create_tournament", flush=True)
        print(f"tournament: {tournament_id}", flush=True)
        if tournament_id not in cls.tournaments:
            tournament = await get_tournament(tournament_id)
            if not tournament:
                print(f"Error getting tournament {tournament_id}", flush=True)
                return None
            cls.tournaments[tournament_id] = Tournament(tournament)
            return cls.tournaments[tournament_id]


    @classmethod
    async def start_tournament(cls, tournament_id):
        print("id in tournament ", flush=True)
        print(tournament_id, flush=True)
        if tournament_id in cls.tournaments:
            print(f"Starting tournament {tournament_id}", flush=True)
            # await cls.tournaments[tournament_id].start()
            loop = asyncio.get_event_loop()
            loop.create_task(cls.tournaments[tournament_id].start())
