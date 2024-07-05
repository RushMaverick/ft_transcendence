from .collider import Collider
from . import consts

class Player(Collider):
	def __init__(self, id: int, name: str):
		self.id:int = id
		self.score: int = 0
		self.name: str = name
		self.x: int = consts.PLAYER1_START_X if id == 1 else consts.PLAYER2_START_X
		self.y: int = consts.PLAYER1_START_Y if id == 1 else consts.PLAYER2_START_Y
		self.z: int = consts.PLAYER1_START_Z if id == 1 else consts.PLAYER2_START_Z
		self.height: int = consts.PLAYER_HEIGHT
		self.width: int = consts.PLAYER_WIDTH
		self.depth: int = consts.PLAYER_DEPTH
		self.move_up: bool = False
		self.move_down: bool = False

	def move(self, direction: str) -> None:
		print(f"Player {self.id} moving {direction}", flush=True)
		if direction == "up":
			self.move_up = True
		elif direction == "down":
			self.move_down = True


	def update_position(self) -> None:
		if self.move_up:
			if (self.z <= 0):
				return
			self.z -= 1
			self.move_up = False

		elif self.move_down:
			if (self.z + self.width >= consts.MAP_HEIGHT // 2):
				return
			self.z += 1
			self.move_down = False
