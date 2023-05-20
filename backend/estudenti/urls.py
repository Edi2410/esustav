from django.urls import path, include
from . import views
from rest_framework import routers
from .views import GoogleLoginView, UserRedirectView

router = routers.DefaultRouter()
router.register('users', views.UserView)

urlpatterns = [
    path('', include(router.urls)),
    path("login/",
         GoogleLoginView.as_view(), name="google_login"),
    path("~redirect/", view=UserRedirectView.as_view(), name="redirect"),
]
