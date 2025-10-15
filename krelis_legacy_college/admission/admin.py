from django.contrib import admin

# Register your models here.

from .models import AdmissionApplication

@admin.register(AdmissionApplication)
class AdmissionApplicationAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'surname', 'applied_class', 'submission_date', 'is_processed')
    list_filter = ('applied_class', 'sex', 'is_processed', 'submission_date')
    search_fields = ('first_name', 'surname', 'parent_name', 'parent_email')
    date_hierarchy = 'submission_date'
