from django.shortcuts import render
from django.http.response import JsonResponse
from django.http.response import HttpResponse
from rest_framework.decorators import api_view
import json

# from django.views.decorators.csrf import csrf_exempt

from api import models
from api.models import Company, Vacancy
from api.serializers import CompanySerializer1, VacancySerializer2


@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer1(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        desc = data.get('description', '')
        city = data.get('city', '')
        address = data.get('address', '')
        Company.objects.create(name=company_name, description=desc, city=city, address=address)
        return JsonResponse({'Created'})

@api_view(['GET', 'DELETE', 'PUT'])
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == 'GET':
        return JsonResponse(company.to_json_c(), status=200)
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_company_name = data.get('name', company.name)
        new_company_desc = data.get('description', company.description)
        new_company_city = data.get('city', company.city)
        new_company_address = data.get('address', company.address)
        company.name = new_company_name
        company.description = new_company_desc
        company.city = new_company_city
        company.address = new_company_address
        company.save()
        serializer = CompanySerializer1(company, many=True)
        return JsonResponse(serializer.data, safe=False)


def vacancy_by_company(request, company_id):
    try:
        vacancies = models.Vacancy.objects.all()
        vacancies2 = vacancies.filter(company=company_id)
        serializer = VacancySerializer2(vacancies2, many=True)
        return JsonResponse(serializer.data, safe=False)
    except:
        return JsonResponse({'error': ' This company does not contain any vacancies'})


@api_view(['GET', 'POST'])
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer2(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        serializer = VacancySerializer2(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)


@api_view(['GET', 'DELETE', 'PUT'])
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    if request.method == 'GET':
        return JsonResponse(vacancy.to_json_v(), status=200)
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'deleted': True})
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_vacancy_name = data.get('name', vacancy.name)
        new_vacancy_desc = data.get('description', vacancy.description)
        new_vacancy_salary = data.get('salary', vacancy.salary)
        vacancy.name = new_vacancy_name
        vacancy.description = new_vacancy_desc
        vacancy.salary = new_vacancy_salary
        vacancy.save()
        serializer = VacancySerializer2(vacancy, many=True)
        return JsonResponse(serializer.data, safe=False)


def top_ten_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer2(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

# Create your views here.
