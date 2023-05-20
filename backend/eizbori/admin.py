from django.contrib import admin
from .models import Kandidature, Votes, NumberOfVotesPerTeam

# Register your models here.
admin.site.register(Kandidature)
admin.site.register(Votes)
admin.site.register(NumberOfVotesPerTeam)