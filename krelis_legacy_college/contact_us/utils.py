from django.core.mail import EmailMessage
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

def send_contact_notification(contact_message):
    """Send email notification to school about new contact message"""
    
    # Email subject
    subject = f'New Contact Message from {contact_message.first_name} {contact_message.last_name}'
    
    # Email content
    message = f"""
New Contact Message Received

Sender Information:
- Name: {contact_message.first_name} {contact_message.last_name}
- Email: {contact_message.email}

Message:
{contact_message.message}

Submission Date: {contact_message.submission_date}

This is an automated message from Krelis Legacy College website.
"""
    
    # Create email
    email = EmailMessage(
        subject,
        message,
        settings.DEFAULT_FROM_EMAIL,
        [settings.SCHOOL_ADMIN_EMAIL],
    )
    
    # Send email
    try:
        email.send()
        return True
    except Exception as e:
        # Log error
        print(f"Error sending email: {e}")
        return False
