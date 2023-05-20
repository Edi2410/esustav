from django.db import models
from estudenti.models import User, Roles, Teams
# Create your models here.


class Kandidature(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, null=True)
    role = models.ForeignKey(Roles, on_delete=models.DO_NOTHING, null=True)
    team = models.ForeignKey(Teams, on_delete=models.DO_NOTHING, null=True)

class NumberOfVotesPerTeam(models.Model):
    team = models.ForeignKey(Teams, on_delete=models.DO_NOTHING, null=True)
    number_of_votes = models.IntegerField(default=1)
    
class Votes(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, null=True)
    kandidatura = models.ForeignKey(Kandidature, on_delete=models.DO_NOTHING, null=True)
    is_voted = models.BooleanField(default=False)
    
