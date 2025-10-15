from django.shortcuts import render 

# Create your views here.

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import AdmissionApplication
from .serializers import AdmissionApplicationSerializer
from .utils import send_admission_notification

@api_view(['GET', 'POST'])
def admission_api(request):
    if request.method == 'POST':
        # Handle POST request
        serializer = AdmissionApplicationSerializer(data=request.data)
        if serializer.is_valid():
            application = serializer.save()
            email_sent = send_admission_notification(application)
            response_data = {
                'message': 'Application submitted successfully!',
                'application_id': application.id,
                'email_sent': email_sent
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        # Handle GET request
        applications = AdmissionApplication.objects.all()
        serializer = AdmissionApplicationSerializer(applications, many=True)
        return Response(serializer.data)
