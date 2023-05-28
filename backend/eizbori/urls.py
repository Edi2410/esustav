from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('candidate', views.CandidateView)
router.register('votes', views.VotesView)

urlpatterns = [
    path('', include(router.urls)),
]
