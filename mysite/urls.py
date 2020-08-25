from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('about', index),
    path('how-it-works', index),
    path('vote', index),
    path('contact', index),
    path('contestant/<int:id>', index),
]