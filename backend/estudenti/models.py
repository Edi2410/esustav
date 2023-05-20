from django.db import models
from django.contrib.auth.models import AbstractUser


class RoleGroups(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    deleted = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.name}"


class Roles(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    deleted = models.BooleanField(default=False)
    role_group = models.ForeignKey(RoleGroups, on_delete=models.DO_NOTHING, null=True)

    def __str__(self) -> str:
        return f"{self.name}"


class User(AbstractUser):
    deleted = models.BooleanField(default=False)
    estudent_mail = models.CharField(max_length=100, blank=True, null=True)

    class Gender(models.TextChoices):
        MALE = "male"
        FEMALE = "female"
        OTHER = "other"

    gender = models.CharField(
        choices=Gender.choices,
        max_length=20,
        default=Gender.OTHER,
        )
    role = models.ForeignKey(Roles, on_delete=models.DO_NOTHING, null=True)

    def __str__(self) -> str:
        return f"{self.email}"


class TeamGroups(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    deleted = models.BooleanField(default=False)
    active = models.BooleanField(default=False) 
    virtual = models.BooleanField(default=False)    
    def __str__(self) -> str:
        return f"{self.name}"


class Teams(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    short_name = models.CharField(max_length=50, blank=True, null=True)
    deleted = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    description = models.TextField(blank=True, null=True)
    TeamGroups = models.ForeignKey(TeamGroups, on_delete=models.DO_NOTHING, null=True)
    
    def __str__(self) -> str:
        return f"{self.name}"
    
class VirtualTeams(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    short_name = models.CharField(max_length=50, blank=True, null=True)
    deleted = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    description = models.TextField(blank=True, null=True)
    TeamGroups = models.ForeignKey(TeamGroups, on_delete=models.DO_NOTHING, null=True)


class UsersPositions(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, null=True)
    team = models.ForeignKey(Teams, on_delete=models.DO_NOTHING, null=True)
    virtual_team = models.ForeignKey(VirtualTeams, on_delete=models.DO_NOTHING, null=True)
    role = models.ForeignKey(Roles, on_delete=models.DO_NOTHING, null=True)
