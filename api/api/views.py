from .models import PopulationData
from .serializers import  PopulationDataSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render
from django.http import JsonResponse

import csv

class return_list_population(APIView):
    def get(self, request):
        pop_data = PopulationData.objects.all()
        serializer = PopulationDataSerializer(pop_data, many=True)
        return Response(serializer.data)



def index(request):
    return render(request,'index.html')


# def import_population_data_from_csv(request):
#     with open("D:/Work/DJANGO POPULATION FUNNEL CHART TEST/Final/AAK-Tele-Science-Test/population_by_age_group_and_gender_pakistan.csv", newline='') as csvfile:
#         reader = csv.DictReader(csvfile)
#         for row in reader:
#             PopulationData.objects.create(
#                 year=row['Year'],
#                 population_65plus_male=row['Population by broad age group - Male - Age: 65+ - Variant: estimates'],
#                 population_25to64_male=row['Population by broad age group - Male - Age: 25-64 - Variant: estimates'],
#                 population_15to24_male=row['Population by broad age group - Male - Age: 15-24 - Variant: estimates'],
#                 population_5to14_male=row['Population by broad age group - Male - Age: 5-14 - Variant: estimates'],
#                 population_0to4_male=row['Population by broad age group - Male - Age: 0-4 - Variant: estimates'],
#                 population_65plus_female=row['Population by broad age group - Female - Age: 65+ - Variant: estimates'],
#                 population_25to64_female=row['Population by broad age group - Female - Age: 25-64 - Variant: estimates'],
#                 population_15to24_female=row['Population by broad age group - Female - Age: 15-24 - Variant: estimates'],
#                 population_5to14_female=row['Population by broad age group - Female - Age: 5-14 - Variant: estimates'],
#                 population_0to4_female=row['Population by broad age group - Female - Age: 0-4 - Variant: estimates']
#             )

#     return JsonResponse({"hey":'man'})