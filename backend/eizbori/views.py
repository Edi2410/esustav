
from django.http import JsonResponse
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from .models import Candidate, Votes, NumberOfVotesPerTeam
from django.db.models import Q
from .serializers import CandidateSerializers, IDTeamSerializer, VotesSerializers, NumberOfVotesPerTeamSerializers, AddVotesSerializers
from estudenti.models import Teams


class CandidateView(viewsets.GenericViewSet):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializers()
    permission_classes = [IsAuthenticated]

    def list(self, request):
        serializer = IDTeamSerializer(data=request.query_params)
        serializer.is_valid(raise_exception=True)

        team = serializer.validated_data['team']
        role_name_list = ["Tajnik/ca", "Predsjednik/ca", "Potpredsjednik/ca"]
        team_name_list = ["Statut", "Pravilnik", "Nadzorni Odbor"]

        queryset = Candidate.objects.filter(
            (Q(team=team) | Q(team__name__in=team_name_list) |
             Q(role__name__in=role_name_list)) & Q(deleted=False)
        ).exclude(user=self.request.user)

        serializer = CandidateSerializers(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class VotesView(viewsets.GenericViewSet):
    queryset = Votes.objects.all()
    serializer_class = VotesSerializers()
    permission_classes = [IsAuthenticated]

    def list(self, request):
        serializer = IDTeamSerializer(data=request.query_params)
        serializer.is_valid(raise_exception=True)
        queryset = Votes.objects.filter(
            team=serializer.validated_data['team'], deleted=False)
        serializer = VotesSerializers(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        try:
            serializer = AddVotesSerializers(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)

    @action(methods=["GET"], detail=False, url_path="number")
    def number_of_votes(self, request):
        serializer = IDTeamSerializer(data=request.query_params)
        serializer.is_valid(raise_exception=True)

        queryset = NumberOfVotesPerTeam.objects.get(
            team=serializer.validated_data['team'])
        serializer = NumberOfVotesPerTeamSerializers(queryset)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(methods=["GET"], detail=False, url_path="isvoted")
    def votes_data(self, request):
        try:
            queryset = Votes.objects.filter(
                user=self.request.user, kandidatura__deleted=False)

            if not queryset:
                return Response({}, status=status.HTTP_204_NO_CONTENT)

            serializer = VotesSerializers(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)

    @action(methods=["GET"], detail=False, url_path="results")
    def votes_results(self, request):
        try:
            return_data = []

            kandidature = Candidate.objects.filter(deleted=False)

            for kandidatura in kandidature:
                return_data.append({
                    "kandidatura": kandidatura.user.email,
                    "team": kandidatura.team.name,
                    "role": kandidatura.role.name,
                    "votes_yes": Votes.objects.filter(
                        kandidatura=kandidatura, is_voted=True).count(),
                    "votes_no": Votes.objects.filter(
                        kandidatura=kandidatura, is_voted=False).count(),
                })
            return JsonResponse(return_data, safe=False, status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)
