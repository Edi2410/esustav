

from rest_framework.decorators import permission_classes, action
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.authentication import (
    JWTAuthentication,
)


from rest_framework import viewsets
from .serializers import UserPositionSerializer, UserSerializer
from .models import User, UsersPositions
from rest_framework.response import Response
from rest_framework.decorators import permission_classes


@permission_classes([IsAuthenticated])
class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(
        methods=["GET"],
        detail=False,
        url_path="auth",
    )
    def user_data(self, request):
        user_position = UsersPositions.objects.get(user=self.request.user)
        user_position_serializer = UserPositionSerializer(user_position)

        return_data = {
            "user_data": user_position_serializer.data,
        }
        return Response(return_data, status=status.HTTP_200_OK)
