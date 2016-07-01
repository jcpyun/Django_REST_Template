from django.shortcuts import render

# Create your views here.
def home(request):
    template="home_templates/home.html"
    context={

    }
    return render(request,template,context)
def input(request):
    template="home_templates/input.html"
    context={

    }
    return render(request,template,context)