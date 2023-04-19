from django.urls import path
from api import views

urlpatterns = [
    # FBV
    path('companies/', views.company_list),
    path('companies/<int:company_id>/', views.company_detail),
    path('companies/<int:company_id>/vacancies/', views.vacancy_by_company),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:vacancy_id>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.top_ten_vacancies)
    # CBV
    # path('companies/', views.CompanyListAPIView.as_view()),
    # path('companies/<int:company_id>/', views.CompanyDetailAPIView.as_view()),
    # path('vacancies/', views.VacancyListAPIView.as_view()),
    # path('vacancies/<int:vacancy_id>/', views.VacancyDetailAPIView.as_view()),
]