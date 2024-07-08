import threading
import asyncio
from .pong import Pong


class CreateGameThread:
	threads = {}
	games: dict[Pong] = {}


	@classmethod
	def create_game(cls, game_name):

		if game_name not in cls.games:
			cls.games[game_name] = Pong()

		if game_name not in cls.threads:
			# Create a new thread that runs an event loop
			def run_event_loop(loop):
				asyncio.set_event_loop(loop)
				# Schedule the game_loop coroutine to run on the event loop
				asyncio.ensure_future(cls.games[game_name].game_loop())
				# Run the event loop until the game_loop coroutine completes
				loop.run_forever()

			# Create a new event loop
			new_loop = asyncio.new_event_loop()

			# Create a new thread that runs the event loop
			thread = threading.Thread(target=run_event_loop, args=(new_loop,))
			# thread.start()

			# Store the thread and its state
			cls.threads[game_name] = {
				"thread": thread,
				"player1": False,
				"player2": False,
				"active": False,
			}

	@classmethod
	def start_game(cls, game_name):
		if game_name in cls.threads:
			if (cls.threads[game_name]["player1"] and cls.threads[game_name]["player2"]) and not cls.threads[game_name]["active"]:
				cls.threads[game_name]["active"] = True
				cls.threads[game_name]["thread"].start()

	@classmethod
	def stop_game(cls, game_name):
		if game_name in cls.threads:
			cls.threads[game_name]["active"] = False
			# pong_instance = cls.games[game_name]
			# pong_instance.stop_game()
			print("#1", flush=True)
			print("is alive: ", cls.threads[game_name]["thread"].is_alive(), flush=True)
			# while (cls.threads[game_name]["thread"]["active"]):
			# 	pass
			cls.threads[game_name]["thread"].join()
			print("#2", flush=True)
			del cls.threads[game_name]  # Remove the thread entry
			del cls.games[game_name]  # Optionally remove the game instance as well
			print("Game stopped successfully", flush=True)
