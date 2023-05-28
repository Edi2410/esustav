from django.db import models
from estudenti.models import User, Roles, Teams
# Create your models here.


class Candidate(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, null=True)
    role = models.ForeignKey(Roles, on_delete=models.DO_NOTHING, null=True)
    team = models.ForeignKey(Teams, on_delete=models.DO_NOTHING, null=True)
    cv = models.TextField(blank=True, null=True)
    plan_rada = models.TextField(blank=True, null=True)
    aktivnosti = models.TextField(blank=True, null=True)
    deleted = models.BooleanField(default=False)
    
    def __str__(self) -> str:
        return f"{self.user.email} - {self.role.name} - {self.team.name}"


class NumberOfVotesPerTeam(models.Model):
    team = models.ForeignKey(Teams, on_delete=models.DO_NOTHING, null=True)
    number_of_votes = models.IntegerField(default=1)

    def __str__(self) -> str:
        return f"{self.team.name} - {self.number_of_votes}"


class Votes(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, null=True)
    kandidatura = models.ForeignKey(
        Candidate, on_delete=models.DO_NOTHING, null=True)
    is_voted = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.user.email} - {self.kandidatura.user.email} - {self.is_voted}"
