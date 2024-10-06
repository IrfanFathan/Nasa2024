from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')


# weather
def weather(request):
    return render(request,'weather.html',name='weather')

def login(request):
    return render(request,'login.html')


# soil
def soil(request):
    return render(request,'soil.html')
# resource
def resources(request):
    return render(request,'resources.html')
# crop
def crop(request):
    return render(request,'crop.html')
# crop health
def crophealth(request):
    return render(request,'crophealth.html')