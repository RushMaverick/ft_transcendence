from .collider import Collider
from . import consts

class Ball(Collider):
	def __init__(self):
		self.x: int = consts.BALL_START_X
		self.y: int = consts.BALL_START_Y
		self.dx: int = consts.BALL_START_DX
		self.dy: int = consts.BALL_START_DY
		self.width: int = 5
		self.height: int = 5

	# def intersects(self, other) -> None:
    #     return (self.x < other.x + other.width and
    #             self.x + self.width > other.x and
    #             self.y < other.y + other.height and
    #             self.y + self.height > other.y)


	def update_position(self) -> None:
		self.x += self.dx
		self.y += self.dy

		if self.y <= 0 or self.y >= consts.MAP_HEIGHT - 1:
			self.dy *= -1

	def reset_position(self) -> None:
		self.x = consts.MAP_WIDTH // 2
		self.y = consts.MAP_HEIGHT // 2
		self.dx = -self.dx
		self.dy = -self.dy
