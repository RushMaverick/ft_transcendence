from django.db import models
from django.contrib.auth.models import User
from tournaments.models import Tournament

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Avatar(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    image = models.ImageField(upload_to=upload_to, blank=True, null=True)
    uploaded_on = models.DateTimeField(auto_now_add=True)
    # avatar = models.URLField(default='https://www.gravatar.com/avatar/')
    # avatar = models.URLField(default='https://picsum.photos/200')

    def __str__(self):
        return "%s's profile" % self.user.username

