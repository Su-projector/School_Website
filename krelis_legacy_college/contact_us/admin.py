from django.contrib import admin

# Register your models here.

from .models import ContactMessage

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'phone_number', 'submission_date', 'is_processed')
    list_filter = ('is_processed', 'submission_date')
    search_fields = ('first_name', 'last_name', 'email',  'message')
    date_hierarchy = 'submission_date'
    readonly_fields = ('submission_date',)
    
    fieldsets = (
        ('Sender Information', {
            'fields': ('first_name', 'last_name', 'email', 'phone_number')
        }),
        ('Message', {
            'fields': ('message',)
        }),
        ('Meta Information', {
            'fields': ('submission_date', 'is_processed')
        }),
    )

