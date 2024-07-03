"""
ASGI config for django_backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
django_asgi_app = get_asgi_application()

from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator

from pong.middlewares import JWTAuthenticationMiddleware

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_backend.settings')


from django_backend.routing import websocket_urlpatterns

# Remember for check the user online status the JWT should be uncomment 
application = ProtocolTypeRouter({
    "http": django_asgi_app,
	"websocket": AllowedHostsOriginValidator(
            JWTAuthenticationMiddleware(
                    URLRouter(websocket_urlpatterns)
            )
        )
})

