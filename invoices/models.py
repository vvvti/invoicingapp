from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from datetime import datetime
from django.utils import timezone
from django_extensions.db.fields import AutoSlugField


class Contractor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    contractor_name = models.CharField(
        'Company name', max_length=200)
    contractor_nip = models.CharField(
        'NIP', max_length=12, blank=True)
    contractor_regon = models.IntegerField(
        'REGON', blank=True, null=True)
    contractor_phone = models.CharField(
        'Phone number', max_length=20, blank=True)
    contractor_email = models.EmailField(
        'Email address', max_length=254, blank=True)

    def __str__(self):
        return(self.contractor_name)


class ContractorAddress(models.Model):
    contractor = models.ForeignKey(Contractor, on_delete=models.CASCADE)
    city = models.CharField('City or Town', max_length=200)
    street = models.CharField('Street', max_length=200, blank=True)
    number = models.CharField('House number', max_length=100)
    post = models.CharField('Post office', max_length=200)
    postal_code = models.CharField('Postal code', max_length=200)
    notes = models.CharField('Notes', max_length=250, blank=True)

    def __str__(self):
        return(self.city)


class Invoice(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    contractor = models.ForeignKey(Contractor, on_delete=models.CASCADE)
    invoice_date = models.DateTimeField(
        'invoice issue date', default=timezone.now)
    invoice_number = models.CharField(
        'invoice number', max_length=80, unique=True)
    sell_date = models.DateTimeField(
        'date of sell', default=timezone.now)
    payment_form = models.CharField('payment form', max_length=80)
    payment_date = models.DateTimeField(
        'date of sell', default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return(self.invoice_number)


class InvoicePosition(models.Model):
    invoice = models.ForeignKey(Invoice, on_delete=models.CASCADE)
    product_name = models.CharField('Product/service namme', max_length=250)
    quantity = models.DecimalField('Quantity', max_digits=10, decimal_places=2)
    price = models.DecimalField('Price', max_digits=12, decimal_places=2)

    def __str__(self):
        return(self.product_name)
