import tkinter as tk
from abc import ABC, abstractmethod

"""Crear una clase abstracta Animal que tenga un método
hacer_sonido. Luego, crear clases Perro y Gato que hereden de
Animal e implementen hacer_sonido"""


class InstrumentoMusical(ABC):
    @abstractmethod
    def tocar(self):
        pass

class Guitarra(InstrumentoMusical):
    def tocar(self):
        return "La guitarra está sonando "

class Bateria(InstrumentoMusical):
    def tocar(self):
        return "La batería está sonando "

