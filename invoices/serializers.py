from rest_framework import serializers
from . models import Contractor, ContractorAddress, Invoice, InvoicePosition


class ContractorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contractor
        fields = (
            '_all_'
        )


class ContractorAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContractorAddress
        fields = (
            '_all_'
        )


class InvoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoice
        fields = (
            '_all_'
        )


class InvoicePositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvoicePosition
        fields = (
            '_all_'
        )
