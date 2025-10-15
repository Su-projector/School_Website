from django.core.mail import EmailMessage
from django.conf import settings

def send_admission_notification(application):
    """Send email notification to school about new admission application"""
    
    subject = f'New Admission Application: {application.first_name} {application.surname}'
    
    message = f"""
New Admission Application Received

Student Information:
- Name: {application.first_name} {application.other_names} {application.surname}
- Date of Birth: {application.date_of_birth}
- Email: {application.email}
- Place of Birth: {application.place_of_birth}
- Gender: {application.get_sex_display()}

Parent/Guardian Information:
- Name: {application.parent_name}
- Phone: {application.parent_phone}
- Email: {application.parent_email}

Academic Information:
- Class Applying For: {application.get_applied_class_display()}
- Former School: {application.former_school}
- School State: {application.school_state}
- School City: {application.school_city}
- School Address: {application.school_address}

Submission Date: {application.submission_date}

This is an automated message from Krelis Legacy School website.
"""
    
    email = EmailMessage(
        subject,
        message,
        settings.DEFAULT_FROM_EMAIL,
        [settings.SCHOOL_ADMIN_EMAIL],
    )
    
    try:
        email.send()
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False

