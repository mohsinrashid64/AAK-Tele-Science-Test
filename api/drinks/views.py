from django.http import JsonResponse
from .models import Drink
from .models import PopulationData
from .serializers import DrinkSerializer, PopulationDataSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

import csv


# def drink_list(request):
#     drinks = Drink.objects.all()
#     serializer = DrinkSerializer(drinks, many=True)
#     return JsonResponse(serializer.data, safe = False)


class drink_list(APIView):
    def get(self, request):
        drinks = Drink.objects.all()
        serializer = DrinkSerializer(drinks, many=True)
        print(type(serializer.data[0]))
        return Response(serializer.data)



class return_list_population(APIView):
    def get(self, request):
        pop_data = PopulationData.objects.all()
        serializer = PopulationDataSerializer(pop_data, many=True)
        return Response(serializer.data)



# def import_population_data_from_csv(request):
#     with open("/Users/mohsin/Desktop/Personal Stuff/Django REST/population_by_age_group_pakistan.csv", newline='') as csvfile:
#         reader = csv.DictReader(csvfile)
#         for row in reader:
#             PopulationData.objects.create(
#                 entity=row['Entity'],
#                 code=row['Code'],
#                 year=row['Year'],
#                 population_65plus=row['Population by broad age group - Sex: all - Age: 65+ - Variant: estimates'],
#                 population_25to64=row['Population by broad age group - Sex: all - Age: 25-64 - Variant: estimates'],
#                 population_15to24=row['Population by broad age group - Sex: all - Age: 15-24 - Variant: estimates'],
#                 population_5to14=row['Population by broad age group - Sex: all - Age: 5-14 - Variant: estimates'],
#                 population_0to4=row['Population by broad age group - Sex: all - Age: 0-4 - Variant: estimates']
#             )

#     return JsonResponse({"hey":'man'})


# Run the import function
# import_population_data_from_csv('/Users/mohsin/Desktop/Personal Stuff/Django REST/population_by_age_group_pakistan.csv')