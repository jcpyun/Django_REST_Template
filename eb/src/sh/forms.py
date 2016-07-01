from django import forms 
from django.forms import ModelForm

from .models import Snippet

class SellerPosts(ModelForm):
    class Meta:
        model = Snippet
        #fields= ['title','context','after','initial']
        exclude= ['']