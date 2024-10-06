from django.urls import path
from . import views

urlpatterns = [
    
     path('',views.index),
       path('login/',views.login),
        path('weather/',views.weather,name='weather') ,
        path('soil/',views.soil,name='soil'),
        path('resources/',views.resources,name='resources'),
        path('crop/',views.crop,name='crop'),
        path('crophealth/',views.crophealth,name='crophealth')
]
