from channels.db import database_sync_to_async
from channels.middleware import BaseMiddleware
from rest_framework_simplejwt.tokens import UntypedToken
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from django.contrib.auth.models import AnonymousUser
from django.contrib.auth import get_user_model
from jwt import decode as jwt_decode
from django.conf import settings

User = get_user_model()

@database_sync_to_async
def get_user(validated_token):
	try:
		print(f"Validated token: {validated_token}")
		user = get_user_model().objects.get(id=validated_token["user_id"])
		return user

	except User.DoesNotExist:
		return AnonymousUser()

class JWTAuthenticationMiddleware(BaseMiddleware):
	def __init__(self, inner):
		self.inner = inner

	async def __call__(self, scope, receive, send):
		# Extract the token from the query string or headers
		try:
			authorization = dict((x.decode('ascii').lower(), y.decode('ascii')) for x, y in scope['headers'])
			token = authorization.get('authorization', '').split('Bearer ')[1] if 'authorization' in authorization else None
			# print(f"Token: {token}", flush=True)
			if (not token):
				scope['user'] = AnonymousUser()
				return await self.inner(scope, receive, send)
			UntypedToken(token)
			# print("Valid token", flush=True)
			decoded_data = jwt_decode(token, settings.SECRET_KEY, algorithms=['HS256'])
			scope['user'] = await get_user(decoded_data)
		except:
			scope['user'] = AnonymousUser()
		return await self.inner(scope, receive, send)
