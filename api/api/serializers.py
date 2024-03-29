from rest_framework import serializers
from .models import PopulationData



class PopulationDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopulationData
        fields = [ 'year', 
                  'population_65plus_male', 
                  'population_25to64_male', 
                  'population_15to24_male', 
                  'population_5to14_male', 
                  'population_0to4_male',
                  'population_65plus_female',
                  'population_25to64_female',
                  'population_15to24_female',
                  'population_5to14_female',
                  'population_0to4_female',
                  ]