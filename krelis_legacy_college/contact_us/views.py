from django.shortcuts import render

# Create your views here.

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from .utils import send_contact_notification

@api_view(['GET', 'POST'])
def contact_api(request):
    if request.method == 'POST':
        # Handle POST request
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            contact_message = serializer.save()
            email_sent = send_contact_notification(contact_message)
            response_data = {
                'message': 'Your message has been sent successfully!',
                'email_sent': email_sent
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        # Handle GET request
        return Response({'message': 'This endpoint accepts POST requests for contact messages.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
