from django.contrib import admin
from . models import Invoice, Contractor, ContractorAddress, InvoicePosition

admin.site.register(Invoice)
admin.site.register(Contractor)
admin.site.register(ContractorAddress)
admin.site.register(InvoicePosition)
