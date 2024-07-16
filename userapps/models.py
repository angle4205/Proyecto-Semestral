from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Producto(models.Model):
    nombre = models.CharField(max_length=25)
    imagen = models.CharField(max_length=100)
    precio = models.IntegerField()
    descripcion = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Boleta(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    productos = models.ManyToManyField(Producto)
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Boleta {self.id} - {self.fecha}'
