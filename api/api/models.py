from django.db import models



class PopulationData(models.Model):
    year = models.IntegerField()
    population_65plus_male = models.IntegerField()
    population_25to64_male = models.IntegerField()
    population_15to24_male = models.IntegerField()
    population_5to14_male = models.IntegerField()
    population_0to4_male = models.IntegerField()
    
    population_65plus_female = models.IntegerField()
    population_25to64_female = models.IntegerField()
    population_15to24_female = models.IntegerField()
    population_5to14_female = models.IntegerField()
    population_0to4_female = models.IntegerField()
