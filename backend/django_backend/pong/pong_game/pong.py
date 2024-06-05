import time, asyncio
from .player import Player
from .ball import Ball
from . import consts


class Pong:
	def __init__(self):
		self.channel_layer = None
		self.room_group_name = None
		self.tick: int = 1
		self.ball: Ball = Ball()
		self.player1: Player = None
		self.player2: Player = None
		self.active: bool = False
		self.state = {}

	def add_room_group_name(self, room_group_name: str) -> None:
		self.room_group_name = room_group_name

	def add_channel_layer(self, channel_layer) -> None:
		self.channel_layer = channel_layer

	def add_player(self, player: Player) -> Player:
		if player.id == 1:
			self.player1 = player
			return self.player1
		elif player.id == 2:
			self.player2 = player
			return self.player2

	def start(self) -> None:
		print("start", flush=True)
		self.active = True

	def stop(self) -> None:
		print("stop", flush=True)
		self.active = False

	# def remove_player(self, player: Player) -> None:
	# 	if player.id == 1:
	# 		self.player1 = None
	# 	elif player.id == 2:
	# 		self.player2 = None

	async def update_state(self) -> None:
		self.state = {
			1: {
				"name": "Player 1",
				"score": self.player1.score,
				"x": self.player1.x,
				"y": self.player1.y,
			},
			2: {
				"name": "Player 2",
				"score": self.player2.score,
				"x": self.player2.x,
				"y": self.player2.y,
			},
			"ball": {
				"x": self.ball.x,
				"y": self.ball.y,
			},
		}
		print (f"Sending state to {self.room_group_name}", flush=True)
		await self.channel_layer.group_send(
			self.room_group_name, {"type": "game.state", "state": self.state}
		)

	def update_game(self) -> None:
		self.ball.update_position()
		self.player1.update_position()
		self.player2.update_position()

		if self.ball.is_colliding(self.player1) or self.ball.is_colliding(self.player2):
			self.ball.dx *= -1

		if self.ball.x < 0:
			self.player2.score += 1
			self.ball.reset_position()
		elif self.ball.x >= consts.MAP_WIDTH:
			self.player1.score += 1
			self.ball.reset_position()

	async def game_loop(self) -> None:
		print("Game loop", flush=True)
		while self.active:
			if not self.player1 or not self.player2:
				print("Players not connected", flush=True)
				await asyncio.sleep(1)
				continue
			start_time = time.time()
			self.update_game()
			await self.update_state()
			if self.player1.score >= 5 or self.player2.score >= 5:
				self.stop()
				print("Game Over", flush=True)
			delta_time = time.time() - start_time
			sleep_time = 1./self.tick - delta_time
			if (sleep_time > 0):
				await asyncio.sleep(sleep_time)

