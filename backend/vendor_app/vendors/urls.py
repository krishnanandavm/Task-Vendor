from django.urls import path
from .views import RegisterView, ProductListCreateView, ProductRetrieveUpdateDestroyView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('products/', ProductListCreateView.as_view(), name='product_list_create'),
    path('products/<int:pk>/', ProductRetrieveUpdateDestroyView.as_view(), name='product_detail'),
]