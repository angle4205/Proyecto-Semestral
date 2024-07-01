# Create your tests here.
from django.test import TestCase
from django.http import HttpResponse

# String response
def test(request):
    return HttpResponse("test")

# Html string response with url username
def about(request, username):
    return HttpResponse("<h2>about</h2> <h3>this is also a test</h3> <span>hello %s</span>" % username)