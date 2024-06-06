import asyncio
from .pong import Pong


class Games:
	games: dict[Pong] = {}

	@classmethod
	def create_game(cls, game_name):
		if game_name not in cls.games:
			cls.games[game_name] = Pong()

	@classmethod
	def start_game(cls, game_name):
		if game_name in cls.games:
			if (cls.games[game_name].player1 and cls.games[game_name].player2) and not cls.games[game_name].active:
				print(f"Starting {game_name}", flush=True)
				cls.games[game_name].start()
				loop = asyncio.get_event_loop()
				loop.create_task(cls.games[game_name].game_loop())

	@classmethod
	def stop_game(cls, game_name):
		if game_name in cls.games:
			print(f"Stopping {game_name}", flush=True)
			cls.games[game_name].stop()
			del cls.games[game_name]
