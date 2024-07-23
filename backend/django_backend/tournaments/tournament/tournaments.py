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
        if tournament_id in cls.tournaments:
            print(f"Starting tournament {tournament_id}", flush=True)
            await cls.tournaments[tournament_id].start()
            # loop = asyncio.get_event_loop()
            # loop.create_task(cls.tournaments[tournament_id].start())

    # @classmethod
    # def start_game(cls, game_name):
    #     if game_name in cls.games:
    #         if (cls.games[game_name].player1 and cls.games[game_name].player2) and not cls.games[game_name].active:
    #             print(f"Starting {game_name}", flush=True)
    #             cls.games[game_name].start()
    #             loop = asyncio.get_event_loop()
    #             loop.create_task(cls.games[game_name].game_loop())

    # @classmethod
    # def stop_game(cls, game_name):
    #     if game_name in cls.games:
    #         print(f"Stopping {game_name}", flush=True)
    #         cls.games[game_name].stop()
    #         del cls.games[game_name]
