from django.urls import path
from . import views

app_name = 'contact_us'

urlpatterns = [
    path('api/contact/', views.contact_api, name='contact_api'),
]
