from pydoc_data.topics import topics
from pyexpat import model
from turtle import title
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=180)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return self.title


class Topic(models.Model):
    title = models.CharField(max_length=50)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    related_posts = models.ManyToManyField(Post)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title