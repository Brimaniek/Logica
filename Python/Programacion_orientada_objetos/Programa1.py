"""Crear una clase llamada Persona con atributos nombre y edad, e
inicialízalos con valores predeterminados."""


class Person:
    def __init__(self,nombre="sin nombre",edad=0):
        self.nombre = nombre
        self.edad = edad
        