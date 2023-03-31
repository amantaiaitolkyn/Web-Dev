from django.urls import path
from api.views import list_of_products, product_by_id, list_of_categories, category_by_id, products_by_category
urlpatterns = [
    path('products/', list_of_products),
    path('products/<int:product_id>/', product_by_id),
    path('categories/', list_of_categories),
    path('categories/<int:category_id>/', category_by_id),
    path('categories/<int:category_id>/products/', products_by_category)
]