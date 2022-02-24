from django.contrib import admin
from posts.models import Post, Topic, Comment

# Register your models here.


class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "author")


class CommentAdmin(admin.ModelAdmin):
    list_display = ("author", "content")


class TopicAdmin(admin.ModelAdmin):
    list_display = ("title", "author")

admin.site.register(Post, PostAdmin)
admin.site.register(Topic, TopicAdmin)
admin.site.register(Comment, CommentAdmin)

