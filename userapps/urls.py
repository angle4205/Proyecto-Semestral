from django.urls import path, include
from . import views
from . import tests
from django.contrib.auth.views import LogoutView

from userapps.views import inicio, agregar_producto, restar_producto, eliminar_producto, limpiar_carrito, sumar_producto, guardar_carrito

urlpatterns = [
    #pruebas
    path('tests/', include([
        path('test/', tests.test),
        path('about/<str:username>', tests.about)
    ])),
    
    path('', views.inicio, name='inicio'),
    path('admin/', views.admin, name='admin'),
    path('admincrud/', views.admin_crud, name='admin_crud'),
    #carrito
    path('carrito/', views.carrito, name='carrito'),
    path('agregar/<int:producto_id>/', agregar_producto, name="Add"),
    path('eliminar/<int:producto_id>/', eliminar_producto, name="Del"),
    path('restar/<int:producto_id>/', restar_producto, name="Sub"),
    path('sumar/<int:producto_id>/', sumar_producto, name="Sum"),
    path('limpiar/', limpiar_carrito, name="CLS"),
    path('guardar/', guardar_carrito, name="Save"),
    ##################
    path('buscador/', views.buscador, name='buscador'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
]
