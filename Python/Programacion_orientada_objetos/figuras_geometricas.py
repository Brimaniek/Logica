from abc import ABC,abstractmethod

"""Jerarquía de Figuras Geométricas: Crea una clase base Figura con
métodos area() y perimetro() que devuelvan 0. Luego, crea
subclases Cuadrado y Círculo que sobrescriban estos métodos y
calculen el área y perímetro de acuerdo a la figura."""


class Figura(ABC):
   
        pass
        
        @abstractmethod
        def  area(self):
           pass
        @abstractmethod
        def perimetro(self):
             pass
       
       
# Subclase Cuadrado
class Cuadrado(Figura):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado ** 2

    def perimetro(self):
        return 4 * self.lado


#Subclase Círculo
class Circulo(Figura):
    def __init__(self, radio):
        self.radio = radio

    def area(self):
        return 3.1416 * (self.radio ** 2)

    def perimetro(self):
        return 2 * 3.1416 * self.radio
    

