from django.urls import path, include
from .api import RegistrationAPI
from knox import views as knox_views


urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegistrationAPI.as_view()),
]
