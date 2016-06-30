from django.shortcuts import render

# Create your views here.
def home(request):
    template="home_templates/home.html"
    context={

    }
    return render(request,template,context)