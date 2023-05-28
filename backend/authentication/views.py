from django.shortcuts import render
from django.middleware.csrf import get_token
from django.http import JsonResponse
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated


@permission_classes([IsAuthenticated])
def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})
# Create your views here.
