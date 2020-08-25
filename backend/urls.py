from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('contestants/', ContestantView.as_view()),
    path('contact/', ContactView.as_view()),
    path('verify/<str:reference>/<int:id>/', VerificationView.as_view()),
]
