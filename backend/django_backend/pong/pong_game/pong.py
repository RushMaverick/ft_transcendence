import time, asyncio
from .player import Player
from .ball import Ball
from . import consts
from ..signals import match_completed

from match.serializers import MatchSerializer
from match.models import Match
from rooms.models import Room
from asgiref.sync import sync_to_async

class Pong:
	def __init__(self):
		self.channel_layer = None
		self.room_id = None
		self.room_group_name = None
		self.thread = None
		self.tick: int = 30
		self.ball: Ball = Ball()
		self.player1: Player = None
		self.player2: Player = None
		self.active: bool = False
		self.state = {}
		self.match_id = None
		self.match_instance = None
		self.tournament_match = False
		self.player_consumers = []
		self.winner = None


	def start(self) -> None:
		print("start", flush=True)
		self.active = True

	def stop(self) -> None:
		print("stop", flush=True)
		self.active = False

	def remove_player(self, player: Player) -> None:
		if player.id == 1:
			self.player1 = None
		elif player.id == 2:
			self.player2 = None

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
		# print (f"Sending state to {self.room_group_name}", flush=True)
		await self.channel_layer.group_send(
			self.room_group_name, {"type": "game.state", "state": self.state}
		)

	def update_game(self) -> None:
		self.ball.update_position()
		self.player1.update_position()
		self.player2.update_position()

		if self.ball.is_colliding(self.player1) or self.ball.is_colliding(self.player2):
			print ('Collision with player', flush=True)
			self.ball.dx *= -1

		if self.ball.x < 0:
			self.player2.score += 1
			self.ball.reset_position()
		elif self.ball.x >= consts.MAP_WIDTH:
			self.player1.score += 1
			self.ball.reset_position()

	async def kill_connections(self) -> None:
		for consumer in self.player_consumers:
			await consumer.close()

	def surrender(self, player_id) -> None:
		if player_id == 1:
			self.winner = self.player2.user.id
		elif player_id == 2:
			self.winner = self.player1.user.id


	async def game_loop(self) -> None:
		print("Game loop", flush=True)
		print(f"Tournament match: {self.tournament_match}", flush=True)
		await self.set_match_status("in_progress")
		while self.active:
			if not self.player1 or not self.player2:
				print("Players not connected", flush=True)
				await asyncio.sleep(1)
				continue
			start_time = time.time()
			self.update_game()
			await self.update_state()
			if self.player1.score >= 1 or self.player2.score >= 1:
				self.stop()
				print("Game Over", flush=True)
			delta_time = time.time() - start_time
			sleep_time = 1./self.tick - delta_time
			if (sleep_time > 0):
				await asyncio.sleep(sleep_time)
		print("Game loop ended", flush=True)

		if self.winner:
			await self.save_match(winner=self.winner)
		else:
			await self.save_match()
			self.winner = self.player1.id if self.player1.score > self.player2.score else self.player2.id
		await self.channel_layer.group_send(
			self.room_group_name, {"type": "game.state", "state": {"winner": self.winner}}
		)

		await self.delete_room()

		await self.kill_connections()

	@sync_to_async
	def delete_room(self):
		room = Room.objects.get(id=self.room_id)
		room.delete()


	@sync_to_async
	def save_match(self, winner: int=None) -> None:
		p1 = self.player1.user.id
		p2 = self.player2.user.id
		if not winner:
			winner = p1 if self.player1.score > self.player2.score else p2
		# print(f"Saving match with winner: {winner}", flush=True)
		serializer = MatchSerializer(data={
			"player1": p1,
			"player2": p2,
			"winner": winner,
			"player1_score": self.player1.score,
			"player2_score": self.player2.score,
			"status": "completed",
			})
		if not serializer.is_valid():
			raise ValueError("Match data could not be serialized")

		if self.match_instance:
			serializer.update(self.match_instance, serializer.validated_data)
			print("Match saved", flush=True)
		print(f"Tournament match: {self.tournament_match}", flush=True)
		if self.tournament_match:
			match_completed.send(sender=self.__class__, match_id=self.match_id, winner=winner)

	@sync_to_async
	def set_match_status(self, status: str) -> None:
		p1 = self.player1.user.id
		p2 = self.player2.user.id
		serializer = MatchSerializer(data={
			"player1": p1,
			"player2": p2,
			"player1_score": self.player1.score,
			"player2_score": self.player2.score,
			"status": status,
			})
		if not serializer.is_valid():
			raise ValueError("Match data could not be serialized")
		serializer.update(self.match_instance, serializer.validated_data)
		print("Match status updated", flush=True)
