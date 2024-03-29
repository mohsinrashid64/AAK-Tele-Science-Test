from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path('population/', views.return_list_population.as_view()),
    path('',views.index, name='index'),
]
