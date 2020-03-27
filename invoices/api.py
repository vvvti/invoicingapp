from .models import Contractor, Invoice, InvoicePosition
from rest_framework import viewsets, permissions
from .serializers import (ContractorSerializer,
                          InvoiceSerializer, InvoicePositionSerializer)


class ContractorViewSet(viewsets.ModelViewSet):
    queryset = Contractor.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ContractorSerializer

    # def get_queryset(self):
    #   return self.request.user.contractors.all()

    # def perform_create(self, serializer):
    #   serializer.save(user=self.request.user)


class InvoiceViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = InvoiceSerializer

    def get_queryset(self):
        return self.request.user.invoices.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class InvoicePositionViewSet(viewsets.ModelViewSet):
    queryset = InvoicePosition.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = InvoicePositionSerializer
