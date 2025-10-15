from django.db import models

# Create your models here.
from django.core.exceptions import ValidationError

class AdmissionApplication(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]
    
    CLASS_CHOICES = [
        ('Nursery1', 'Nursery 1'),
        ('Nursery2', 'Nursery 2'),
        ('Nursery3', 'Nursery 3'),
        ('Primary1', 'Primary 1'),
        ('Primary2', 'Primary 2'),
        ('Primary3', 'Primary 3'),
        ('Primary4', 'Primary 4'),  
        ('Primary5', 'Primary 5'),
        ('Primary6', 'Primary 6'),
        ('JSS1', 'JSS 1'),
        ('JSS2', 'JSS 2'),
        ('JSS3', 'JSS 3'),
        ('SS1', 'SS 1'),
        ('SS2', 'SS 2'),
        ('SS3', 'SS 3'),
    ]
    
    # Student Information
    first_name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    other_names = models.CharField(max_length=100, blank=True)
    date_of_birth = models.DateField()
    email = models.EmailField()
    place_of_birth = models.CharField(max_length=100)
    sex = models.CharField(max_length=1, choices=GENDER_CHOICES)
    
    # Parent/Guardian Information
    parent_name = models.CharField(max_length=100)
    parent_phone = models.CharField(max_length=15)
    parent_email = models.EmailField()
    
    
    # Academic Information
    applied_class = models.CharField(max_length=10, choices=CLASS_CHOICES)
    former_school = models.CharField(max_length=100)
    school_state = models.CharField(max_length=100)
    school_address = models.TextField()
    school_city = models.CharField(max_length=100)
    
    # Meta Information
    submission_date = models.DateTimeField(auto_now_add=True)
    is_processed = models.BooleanField(default=False)

MAX_APPLICATIONS_PER_EMAIL = 5

    
def clean(self):
    existing_applications = AdmissionApplication.objects.filter(parent_email=self.parent_email).exclude(id=self.id).count()
    if existing_applications >= self.MAX_APPLICATIONS_PER_EMAIL:
        raise ValidationError(f"You have reached the maximum number of applications ({self.MAX_APPLICATIONS_PER_EMAIL}) with this email address.")


    def save(self, *args, **kwargs):
        try:
             self.full_clean()
        except ValidationError as e:
            # Handle the validation error, e.g., log it or re-raise it
            raise
        super().save(*args, **kwargs)    

    def __str__(self):
        return f"{self.first_name} {self.surname} - {self.applied_class}"

