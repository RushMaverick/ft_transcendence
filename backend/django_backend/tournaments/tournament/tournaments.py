import asyncio

from .tournament import Tournament
from .TournamentConsumerHelpers import get_tournament


class Tournaments:
    tournaments: dict[Tournament] = {}

    @classmethod
    async def create_tournament(cls, tournament_id):
        if tournament_id not in cls.tournaments:
            tournament = await get_tournament(tournament_id)
            if not tournament:
                return None
            cls.tournaments[tournament_id] = Tournament(tournament)
            return cls.tournaments[tournament_id]


    @classmethod
    async def start_tournament(cls, tournament_id):
        if tournament_id in cls.tournaments:
            loop = asyncio.get_event_loop()
            loop.create_task(cls.tournaments[tournament_id].start())
