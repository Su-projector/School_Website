from django.db import models

# Create your models here.

class ContactMessage(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15, default=" ")
    message = models.TextField()
    submission_date = models.DateTimeField(auto_now_add=True)
    is_processed = models.BooleanField(default=False)
    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.email} - {self.phone_number}"
