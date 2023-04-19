from django.http import JsonResponse
from django.shortcuts import Http404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from api.models import Company, Vacancy
from api.serializers import CompanySerializer1, VacancySerializer2

import json


class CompanyListAPIView(APIView):
    def get(self,request):
        companies = Company.objects.all()
        serializer = CompanySerializer1(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = json.loads(request.body)
        company_name = data.get('name', '')
        desc = data.get('description', '')
        city = data.get('city', '')
        address = data.get('address', '')
        Company.objects.create(name=company_name, description=desc, city=city, address=address)
        return JsonResponse({'Created'})


class CompanyDetailAPIView(APIView):
    def get_object(self, company_id):
        try:
            return Company.objects.get(pk=company_id)
        except Company.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, company_id):
        instance = self.get_object(company_id)
        serializer = CompanySerializer1(instance)
        return Response(serializer.data)

    def put(self, request, company_id):
        company = self.get_object(company_id)
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

    def delete(self, request, company_id):
        instance = self.get_object(company_id)
        instance.delete()
        return Response({'deleted': True})
class VacancyListAPIView(APIView):
    def get(self,request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer2(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)


    def post(self, request):
        data = json.loads(request.body)
        serializer = VacancySerializer2(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)


class VacancyDetailAPIView(APIView):
    def get_object(self, vacancy_id):
        try:
            return Vacancy.objects.get(pk=vacancy_id)
        except Vacancy.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, vacancy_id):
        instance = self.get_object(vacancy_id)
        serializer = VacancySerializer2(instance)
        return Response(serializer.data)

    def put(self, request, vacancy_id):
        vacancy = self.get_object(vacancy_id)
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

    def delete(self, request, vacancy_id):
        instance = self.get_object(vacancy_id)
        instance.delete()
        return Response({'deleted': True})