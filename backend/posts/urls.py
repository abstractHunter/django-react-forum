import imp
from importlib.resources import path
from django.urls import path
from .views import PostList


urlpatterns = [
    path("all", PostList.as_view()),
]