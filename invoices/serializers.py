from rest_framework import serializers
from . models import Contractor, Invoice, InvoicePosition


class ContractorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contractor
        fields = (
            "__all__"
        )


class InvoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoice
        fields = (
            '__all__'
        )


class InvoicePositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvoicePosition
        fields = (
            '__all__'
        )
