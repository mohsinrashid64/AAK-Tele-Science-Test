from django.http import JsonResponse

from .models import PopulationData
from .serializers import  PopulationDataSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

import csv




class return_list_population(APIView):
    def get(self, request):
        pop_data = PopulationData.objects.all()
        serializer = PopulationDataSerializer(pop_data, many=True)
        return Response(serializer.data)






