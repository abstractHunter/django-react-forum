from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from posts.models import Post, Topic, Comment
from posts.serializers import PostSerializer, TopicSerializer, CommentSerializer

# Create your views here.

 
class PostViewSet(ModelViewSet):
    serializer_class = PostSerializer
 
    def get_queryset(self):
        return Post.objects.all()


class CommentViewSet(ModelViewSet):
    serializer_class = CommentSerializer

    def get_queryset(self):
        return Comment.objects.all()


class TopicViewSet(ModelViewSet):
    serializer_class = TopicSerializer
 
    def get_queryset(self):
        return Topic.objects.all()
