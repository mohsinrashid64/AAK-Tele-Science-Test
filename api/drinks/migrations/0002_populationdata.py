# Generated by Django 4.2.11 on 2024-03-28 07:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("drinks", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="PopulationData",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("entity", models.CharField(max_length=100)),
                ("code", models.CharField(max_length=10)),
                ("year", models.IntegerField()),
                ("population_65plus", models.IntegerField()),
                ("population_25to64", models.IntegerField()),
                ("population_15to24", models.IntegerField()),
                ("population_5to14", models.IntegerField()),
                ("population_0to4", models.IntegerField()),
            ],
        ),
    ]
