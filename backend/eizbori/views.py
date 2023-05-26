from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from .models import Candidate
from .serializers import CandidateSerializers, CandidateForTeamSerializer

class CandidateView(viewsets.ModelViewSet):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializers()
    permission_classes = [IsAuthenticated]
    
    def list(self, request):
        serializer = CandidateForTeamSerializer(data=request.query_params)
        serializer.is_valid(raise_exception=True) 
        queryset = Candidate.objects.filter(team=serializer.validated_data['team'])  
        serializer = CandidateSerializers(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
