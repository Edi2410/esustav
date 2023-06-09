from django.contrib import admin
from django.contrib.auth.models import Group

from .models import User, RoleGroups, Roles, TeamGroups, Teams, UsersPositions, VirtualTeams
# Register your models here.

admin.site.unregister(Group)

admin.site.register(User)
admin.site.register(RoleGroups)
admin.site.register(Roles)

admin.site.register(TeamGroups)
admin.site.register(Teams)
admin.site.register(VirtualTeams)
admin.site.register(UsersPositions)
