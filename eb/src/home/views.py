from django.shortcuts import render
from sh.models import *
from sh.forms import *
# Create your views here.
def home(request):
    template="home_templates/home.html"
    context={

    }
    return render(request,template,context)
def auth_home(request):
    template="home_templates/auth_home.html"
    context={

    }
    return render(request,template,context)
def input(request):
    template="home_templates/input.html"
    form = SellerPosts(request.POST or None)
    if form.is_valid():
        variable = form.save(commit='false')
        variable.save() 
    
    context={
        "formvar":form,
    }
    return render(request,template,context)