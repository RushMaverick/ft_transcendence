from django.test import TestCase

# Create your tests here.
from django.test import TestCase
from pong.pong_game import Pong, Player, Games
# from .consumers import GameConsumer
# from channels.routing import URLRouter
# from channels.testing import WebsocketCommunicator
# from django.urls import re_path
# from django.contrib.auth.models import User
# from asgiref.sync import async_to_sync

# Create your tests here.
class PongTests(TestCase):
	def setUp(self):
		self.pong_game = Pong()

	def test_create_pong_instance(self):
		self.assertIsInstance(self.pong_game, Pong)

	def test_assign_players(self):
		player1 = Player(1, "Player 1")
		player2 = Player(2, "Player 2")
		self.pong_game.add_player(player1)
		self.pong_game.add_player(player2)
		self.assertEqual(self.pong_game.player1, player1)
		self.assertEqual(self.pong_game.player2, player2)

	def test_start_game(self):
		player1 = Player(1, "Player 1")
		player2 = Player(2, "Player 2")
		self.pong_game.add_player(player1)
		self.pong_game.add_player(player2)
		self.pong_game.start()
		self.assertTrue(self.pong_game.active)

	def test_stop_game(self):
		player1 = Player(1, "Player 1")
		player2 = Player(2, "Player 2")
		self.pong_game.add_player(player1)
		self.pong_game.add_player(player2)
		self.pong_game.start()
		self.pong_game.stop()
		self.assertFalse(self.pong_game.active)

class GamesTests(TestCase):
	def setUp(self):
		pass

	def test_create_game(self):
		Games.create_game("game1")
		self.assertIn("game1", Games.games)

	def test_start_game(self):
		Games.create_game("game1")
		game: Pong = Games.games["game1"]
		game.add_player(Player(1, "Player 1"))
		game.add_player(Player(2, "Player 2"))
		Games.start_game("game1")
		self.assertTrue(game.active)

	def test_stop_game(self):
		Games.create_game("game1")
		game: Pong = Games.games["game1"]
		game.add_player(Player(1, "Player 1"))
		game.add_player(Player(2, "Player 2"))
		Games.start_game("game1")
		Games.stop_game("game1")
		self.assertNotIn("game1", Games.games)


# class GameConsumerTests(TestCase):
# 	communicator = None

# 	def setUp(self):
# 		user = User.objects.create_user('user', 'pass')
# 		self.client.login(username='user', password='pass')

# 	async def asyncSetUp(self):
# 		application = URLRouter([
# 			 re_path(r"ws/game/(?P<room_name>\w+)/$", GameConsumer.as_asgi()),
# 		])
# 		self.communicator = WebsocketCommunicator(application, "/ws/game/room1/")
# 		await self.communicator.connect()

# 	async def test_receive_message(self):
# 		application = URLRouter([
# 			 re_path(r"ws/game/(?P<room_name>\w+)/$", GameConsumer.as_asgi()),
# 		])
# 		self.communicator1 = WebsocketCommunicator(application, "/ws/game/room1/")
# 		self.communicator2 = WebsocketCommunicator(application, "/ws/game/room1/")
# 		await self.communicator1.connect()
# 		await self.communicator2.connect()
# 		# Simulate receiving a message from the server
# 		message = await self.communicator1.receive_json_from()
# 		message2 = await self.communicator2.receive_json_from()

# 		expected_message = {'1': {'name': 'Player 1', 'score': 0, 'x': 1, 'y': 5}, '2': {'name': 'Player 2', 'score': 0, 'x': 23, 'y': 5}, 'ball': {'x': 13, 'y': 6}}
# 		print("message", message, flush=True)
# 		print("message2", message2, flush=True)
# 		# Verify the message was received as expected
# 		self.assertEqual(message, expected_message)
# 		self.assertEqual(message2, expected_message)
