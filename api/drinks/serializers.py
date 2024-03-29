from rest_framework import serializers
from .models import Drink, PopulationData

class DrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drink
        fields = ['id','name','description']

class PopulationDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopulationData
        fields = ['id', 'entity', 'code', 'year', 'population_65plus', 'population_25to64', 'population_15to24', 'population_5to14', 'population_0to4']