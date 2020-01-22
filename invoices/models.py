from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from datetime import datetime
from django.utils import timezone
from django_extensions.db.fields import AutoSlugField


class Invoice(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    invoice_date = models.DateTimeField(
        'invoice issue date', default=timezone.now)
    invoice_number = models.CharField('invoice number', max_length=80)
    sell_date = models.DateTimeField(
        'date of sell', default=timezone.now)
    slug = AutoSlugField(populate_from=['pk'], unique=True)
    payment_form = models.CharField('payment form', max_length=80)
    payment_date = models.DateTimeField(
        'date of sell', default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return(self.invoice_date)


class Contractor(models.Model):
    contractor_name = models.CharField(
        'Company name', max_length=200, null=True)
    contractor_nip = models.CharField(
        'NIP', max_length=12, blank=True, null=True)
    contractor_regon = models.IntegerField(
        'REGON', blank=True, null=True)
    contractor_phone = models.CharField(
        'Phone number', max_length=20, blank=True, null=True)
    contractor_email = models.EmailField(
        'Email address', max_length=254, blank=True, null=True)
    slug = AutoSlugField(populate_from=['pk'], unique=True)

    def __str__(self):
        return(self.contractor_name)
