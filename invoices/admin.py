from django.contrib import admin
from . models import Invoice, Contractor, InvoicePosition

admin.site.register(Invoice)
admin.site.register(Contractor)
admin.site.register(InvoicePosition)
