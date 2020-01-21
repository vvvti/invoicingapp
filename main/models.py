from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from datetime import datetime
from django.utils import timezone
from django_extensions.db.fields import AutoSlugField


class invoice(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    invoice_date = models.DateTimeField(
        'invoice issue date', default=timezone.now)
    invoice_number = models.CharField(max_length=80)
    sell_date = models.DateTimeField(
        'date of sell', default=timezone.now)
    slug = AutoSlugField(populate_from=['pk'], unique=True)
    payment_form = models.CharField(max_length=80)
    payment_date = models.DateTimeField(
        'date of sell', default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return(self.invoice_date)
