from rest_framework import routers
from .api import (ContractorViewSet, ContractorAddressViewSet,
                  InvoiceViewSet, InvoicePositionViewSet)


router = routers.DefaultRouter()
router.register('api/contractor', ContractorViewSet, 'contractor')
router.register('api/contractoraddress',
                ContractorAddressViewSet, 'contractoraddress')
router.register('api/invoice', InvoiceViewSet, 'invoice')
router.register('api/invoiceposition',
                InvoicePositionViewSet, 'invoiceposition')

urlpatterns = router.urls
