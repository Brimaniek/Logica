from abc import ABC,abstractmethod

'''Define una clase Animal con un método hacer_sonido() 
que devuelva “Sonido de animal”. Crea subclases como Perro y
Gato que sobrescriban este método con sonidos específicos (como “Guau” y “Miau”).
'''


class Animal(ABC):
    @abstractmethod
    def hacer_sonido(self):
        pass


class Perro(Animal):
    def hacer_sonido(self):
        return "Guau"


class Gato(Animal):
    def hacer_sonido(self):
        return "Miau"


def reproducir_sonido(animal):
    print(animal.hacer_sonido())


# Prueba del código
if __name__ == "__main__":
    perro = Perro()
    gato = Gato()

    reproducir_sonido(perro)
    reproducir_sonido(gato)




