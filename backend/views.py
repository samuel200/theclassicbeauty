from rest_framework.views import APIView
from rest_framework.response import Response

from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from django.template.loader import render_to_string

from .models import *
from .serializers import *

import requests

# Create your views here.

class ContestantView(APIView):

    def get(self, request):
        contestant_serializer = ContestantSerializer(
            Contestant.objects.all(), many=True)
        return Response(contestant_serializer.data)


class ContactView(APIView):

    def post(self, request):
        try:
            context = {
                "name": request.data.get("name"),
                "subject": request.data.get("subject"),
                "email": request.data.get("email"),
                "message": request.data.get("message")
            }

            template = render_to_string('email.html', context)
            text_template = render_to_string('email.txt', context)

            msg = EmailMultiAlternatives(context.get("subject"), text_template, settings.EMAIL_HOST_USER, [
                                         "theclassicbeautynigeria@gmail.com"])
            msg.attach_alternative(template, "text/html")
            msg.fail_silently = False
            msg.send()

        except:
            return Response(status=403, data={"error_message": "Message Failed To Send"})

        return Response({"msg": "Message Sent Successfully"})


class VerificationView(APIView):

    def post(self, request, reference, id):
        r = requests.get("https://api.paystack.co/transaction/verify/"+reference, headers={
                            "Authorization": "Bearer sk_live_74c0b83cb351d391af386b5672b670ae3b39677c"})
        data = r.json()
        if data.get('status'):
            contestant = Contestant.objects.get(id=id)
            try:

                if data['data']['amount'] == 10000:
                    contestant.vote_count += 1

                elif data['data']['amount'] == 50000:
                    contestant.vote_count += 6

                elif data['data']['amount'] == 100000:
                    contestant.vote_count += 12

                elif data['data']['amount'] == 200000:
                    contestant.vote_count += 24

                elif data['data']['amount'] == 400000:
                    contestant.vote_count += 48

                elif data['data']['amount'] == 800000:
                    contestant.vote_count += 96

                contestant.save()

                contestant_serializer = ContestantSerializer(
                    Contestant.objects.all(), many=True)

            except:
                return Response(status=404)

            transaction = Payment(
                token=reference, ammount=data['data']['amount'], confirmed=data['status'], contestant=contestant)
            transaction.save()

            return Response(contestant_serializer.data)
        else:
            return Response(status=401)
