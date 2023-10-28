from django.urls import path
from . import views

urlPaterns = [
    path('', views.getRoutes, name="routes")
]