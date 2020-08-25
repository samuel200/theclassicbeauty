from django.db import models

class Contestant(models.Model):
    name = models.CharField(max_length=200)
    vote_count = models.IntegerField(default=0)
    profile_image = models.ImageField(upload_to="img/")

    def __str__(self):
        return self.name

class Payment(models.Model):
    token = models.CharField(max_length=200)
    ammount = models.IntegerField()
    confirmed = models.BooleanField(default=False)
    contestant = models.ForeignKey(Contestant, on_delete=models.DO_NOTHING, related_name="payments")

    def __str__(self):
        return self.contestant.name + " vote payments"

