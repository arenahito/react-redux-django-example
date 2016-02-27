from django.db import models


class Task(models.Model):

    text = models.TextField()
    done = models.BooleanField(default=False)
