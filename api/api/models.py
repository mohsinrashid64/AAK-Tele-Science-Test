from django.db import models



class PopulationData(models.Model):
    entity = models.CharField(max_length=100)
    code = models.CharField(max_length=10)
    year = models.IntegerField()
    population_65plus = models.IntegerField()
    population_25to64 = models.IntegerField()
    population_15to24 = models.IntegerField()
    population_5to14 = models.IntegerField()
    population_0to4 = models.IntegerField()

    def __str__(self):
        return f"{self.entity} - {self.year}"