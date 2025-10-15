from rest_framework import serializers
from .models import AdmissionApplication

class AdmissionApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionApplication
        fields = '__all__'
        extra_kwargs = {
            'submission_date': {'read_only': True},
            'is_processed': {'read_only': True},
        }
    
    def validate_email(self, value):
        if AdmissionApplication.objects.filter(email=value).exists():
            raise serializers.ValidationError("An application with this email already exists.")
        return value
    
    def validate_parent_email(self, value):
        if AdmissionApplication.objects.filter(parent_email=value).exists():
            raise serializers.ValidationError("An application with this parent email already exists.")
        return value
    
    def validate_parent_phone(self, value):
        if not value.replace('+', '').replace(' ', '').isdigit():
            raise serializers.ValidationError("Phone number must contain only digits, spaces, and '+' sign.")
        return value

