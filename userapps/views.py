from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import JsonResponse
from .models import Producto

# Create your views here.

# render inicio html


def inicio(request):
    productos = Producto.objects.all()
    return render(request, 'inicio.html', {'productos': productos})


def admin_crud(request):
    productos = Producto.objects.all()
    return render(request, "AdminCrud.html", {"productos": productos})

def admin(request):
    return render(request, "Admin.html")


def carrito(request):
    return render(request, "Carrito.html")


def buscador(request):
    return render(request, "Buscador.html")

def logout_view(request):
    logout(request)
    return redirect('login')

def login_view(request):
    if request.method == "POST":
        username = request.POST.get("loginUsername")
        password = request.POST.get("loginPassword")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect("inicio")
        else:
            registerUsername = request.POST.get("registerUsername")
            registerEmail = request.POST.get("registerEmail")
            registerPassword = request.POST.get("registerPassword")

            if User.objects.filter(username=registerUsername).exists():
                return render(request, "Login.html", {"username_error": True})
            elif User.objects.filter(email=registerEmail).exists():
                return render(request, "Login.html", {"email_error": True})

            user = User.objects.create_user(
                username=registerUsername,
                email=registerEmail,
                password=registerPassword,
            )
            login(request, user)
            return redirect("inicio")

    return render(request, "Login.html")


