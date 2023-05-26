from estudenti.models import User
from rest_framework.authentication import BaseAuthentication
from google.oauth2 import id_token
from google.auth.transport import requests


class EmailAuthBackend(BaseAuthentication):
    """
    Custom authentication backend.

    """

    def authenticate(self, request, username=None, password=None):
        try:
            token = request.META.get('HTTP_AUTHORIZATION')
            if (token):
                token = token.split(' ')[1]
                decoded_token = id_token.verify_oauth2_token(
                    token, requests.Request(
                    ), '157718577475-f8tb38i74qm61i4qndh9ge2j4vcn7om8.apps.googleusercontent.com'
                )
                email = decoded_token.get('email')
                picture = decoded_token.get('picture')
                if email:
                    if(email.split('@')[1] == 'estudent.hr'):
                        try:
                            user = User.objects.get(username=email, deleted=0)
                            if(picture):
                                user.photo = picture
                                user.save()
                            return user, None
                        except User.DoesNotExist:
                            return None
            else:
                return None
        except Exception as e:
            print(e)
            return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None

    def authenticate_header(self, request):
        # Return the value of the WWW-Authenticate header when authentication fails
        return 'Bearer realm="api"'
