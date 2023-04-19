# Generated by Django 4.2 on 2023-04-07 05:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="company",
            options={"verbose_name": "Company", "verbose_name_plural": "Companies"},
        ),
        migrations.AlterModelOptions(
            name="vacancy",
            options={"verbose_name": "Vacancy", "verbose_name_plural": "Vacancies"},
        ),
        migrations.AddField(
            model_name="vacancy",
            name="salary",
            field=models.FloatField(default=100000),
        ),
    ]