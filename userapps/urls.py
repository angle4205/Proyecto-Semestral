from django.urls import path, include
from . import views
from . import tests
from django.contrib.auth.views import LogoutView

urlpatterns = [
    #pruebas
    path('tests/', include([
        path('test/', tests.test),
        path('about/<str:username>', tests.about)
    ])),
    #inicio
    path('', views.inicio, name='inicio'),
    path('admin/', views.admin, name='admin'),
    path('admincrud/', views.admin_crud, name='admin_crud'),
    path('carrito/', views.carrito, name='carrito'),
    path('buscador/', views.buscador, name='buscador'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
]
