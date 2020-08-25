from rest_framework.serializers import ModelSerializer
from .models import *

class ContestantSerializer(ModelSerializer):

    class Meta:
        model = Contestant
        fields = ['id', 'name', 'vote_count', 'profile_image']

class PaymentSerializer(ModelSerializer):

    class Meta:
        model = Payment
        fields = ['token', 'ammount', 'confirmed', 'contestant']