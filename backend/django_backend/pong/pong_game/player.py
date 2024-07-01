from .collider import Collider
from . import consts

class Player(Collider):
	def __init__(self, id: int, name: str):
		self.id:int = id
		self.score: int = 0
		self.name: str = name
		self.x: int = consts.PLAYER1_START_X if id == 1 else consts.PLAYER2_START_X
		self.y: int = consts.PLAYER1_START_Y if id == 1 else consts.PLAYER2_START_Y
		self.height: int = consts.PLAYER_HEIGHT
		self.width: int = 1
		self.move_up: bool = False
		self.move_down: bool = False

	def move(self, direction: str) -> None:
		print(f"Player {self.id} moving {direction}")
		if direction == "up":
			self.move_up = True
		elif direction == "down":
			self.move_down = True


	def update_position(self) -> None:
		if self.move_up:
			if (self.y <= 0):
				return
			self.y -= 1
			self.move_up = False

		elif self.move_down:
			if (self.y + self.height >= consts.MAP_HEIGHT):
				return
			self.y += 1
			self.move_down = False
