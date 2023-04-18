from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=355)
    description = models.TextField(max_length=1000)
    city = models.CharField(max_length=255)
    address = models.TextField(max_length=1000)

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json_c(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=355)
    description = models.TextField(max_length=1000)
    salary = models.FloatField(default=100000)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json_v(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary
        }

# Create your models here.
