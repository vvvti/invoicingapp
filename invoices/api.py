from .models import Contractor, ContractorAddress, Invoice, InvoicePosition
from rest_framework import viewsets, permissions
from .serializers import (ContractorSerializer, ContractorAddressSerializer,
                          InvoiceSerializer, InvoicePositionSerializer)


class ContractorViewSet(viewsets.ModelViewSet):
    queryset = Contractor.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ContractorSerializer


class ContractorAddressViewSet(viewsets.ModelViewSet):
    queryset = ContractorAddress.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ContractorAddressSerializer


class InvoiceViewSet(viewsets.ModelViewSet):
    queryset = Invoice.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = InvoiceSerializer


class InvoicePositionViewSet(viewsets.ModelViewSet):
    queryset = InvoicePosition.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = InvoicePositionSerializer
