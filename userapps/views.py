from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .models import Producto
from .Carrito import Carrito

# Create your views here.

# render inicio html


def inicio(request):
    productos = Producto.objects.all()
    return render(request, 'inicio.html', {'productos': productos})

def carrito(request):
    carrito = Carrito(request)
    total_carrito = sum(item['acumulado'] for item in carrito.carrito.values())
    return render(request, 'carrito.html', {'total_carrito': total_carrito})

# views funciones inicio / carrito ---------------------------

def agregar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.agregar(producto)
    return redirect("inicio")

def eliminar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.eliminar(producto)
    return redirect("carrito")

def sumar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.agregar(producto)
    return redirect("carrito")

def restar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.restar(producto)
    return redirect("carrito")

def limpiar_carrito(request):
    carrito = Carrito(request)
    carrito.limpiar()
    return redirect("carrito")

# ------------------------------------------------------------

def admin_crud(request):
    productos = Producto.objects.all()
    return render(request, "AdminCrud.html", {"productos": productos})

def admin(request):
    return render(request, "Admin.html")

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


