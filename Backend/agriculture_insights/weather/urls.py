from django.urls import path
from . import views

urlpatterns = [
    
     path('index/',views.index),
       path('login/',views.login),
        path('weather/',views.weather) ,
        path('soil/',views.soil),
        path('resources/',views.resources),
        path('crop/',views.crop),
        path('crophealth/',views.crophealth)
]
