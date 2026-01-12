from django.urls import path
from . import views

app_name = 'admission'

urlpatterns = [
    path('api/admission/', views.admission_api, name='admission_api'),
]
