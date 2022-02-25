from rest_framework import serializers
from posts.models import Post, Topic, Comment


class CommentSerializer(serializers.ModelSerializer):

    author = serializers.SlugRelatedField(
        read_only=True,
        slug_field="username"
    )

    class Meta:
        model = Comment
        fields = ["author", "content", "created_at"]


class TopicSerializer(serializers.ModelSerializer):

    author = serializers.SlugRelatedField(
        read_only=True,
        slug_field="username"
    )

    class Meta:
        model = Topic
        fields = ["title", "author", "related_posts"]


class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)

    author = serializers.SlugRelatedField(
        read_only=True,
        slug_field="username"
    )

    #topics = TopicSerializer(many=True, source="title")

    class Meta:
        model = Post
        fields = ["id", "title", "content", "author", "topics", "comments", "created_at", "updated_at"]

