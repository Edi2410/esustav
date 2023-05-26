from rest_framework import serializers

from estudenti.serializers import UserSerializer, TeamsSerializer, RolesSerializer
from .models import Candidate


class CandidateSerializers(serializers.ModelSerializer):
    user = UserSerializer()
    team = TeamsSerializer()
    role = RolesSerializer()

    class Meta:
        model = Candidate
        fields = "__all__"

class CandidateForTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ["team"]
