import re
from rest_framework import serializers
from .models import ContactMessage

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'
        extra_kwargs = {
            'submission_date': {'read_only': True},
            'is_processed': {'read_only': True},
        }
    
    def validate_email(self, value):
        # Basic email validation
        if not value or '@' not in value:
            raise serializers.ValidationError("Please enter a valid email address.")
        return value

    def validate_phone_number(self, value):
        # Basic phone number validation for Nigerian format
        pattern = r'^\+234\d{10}$|^0\d{10}$'
        if not re.match(pattern, value):
            raise serializers.ValidationError("Please enter a valid phone number.")
        return value

