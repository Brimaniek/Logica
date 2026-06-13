import random


class GeneradorBase:
    def __init__(self, length=8):
        # atributo privado
        self.__length = length  

    # Getter
    def get_length(self):
        return self.__length

    # Setter: cambiar longitud.....
    def set_length(self, length):
        self.__length = length

    # Polimorfismo
    def generar(self):
        raise NotImplementedError("Este método debe ser sobrescrito por la subclase")


# ==============================
#  Generador de contraseñas
# ==============================
class GeneradorPassword(GeneradorBase):

    __minusculas = "abcdefghijklmnopqrstuvwxyz"
    __mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    __numeros = "0123456789"
    __especiales = "¿¡?=)(/¨*+-%&$#!"

    def __init__(self, length=8):
        super().__init__(length)  # herencia

    # Polimorfismo: sobrescribir generar
    def generar(self):
        length = self.get_length()

        if length < 8:
            raise ValueError("La contraseña debe tener mínimo 8 caracteres.")
        if length > 78: 
            raise ValueError("La contraseña máxima sin repetidos es 78 caracteres.")

        password = []
        usados = set()

        # Asegurar al menos un carácter de cada tipo
        requeridos = [
            random.choice(self.__minusculas),
            random.choice(self.__mayusculas),
            random.choice(self.__numeros),
            random.choice(self.__especiales)
        ]

        for c in requeridos:
            password.append(c)
            usados.add(c)

        # Pool total
        todos = self.__minusculas + self.__mayusculas + self.__numeros + self.__especiales

        # Completar la contraseña sin repetir
        while len(password) < length:
            c = random.choice(todos)
            if c not in usados:
                password.append(c)
                usados.add(c)

        # Mezclar aleatoriamente
        random.shuffle(password)
        return "".join(password)


# ==============================
# PROGRAMA PRINCIPAL
# ==============================
if __name__ == "__main__":
    print("=== Generador de Contraseñas Aleatorias ===")

    try:
        longitud = int(input("Ingrese la longitud de la contraseña (mínimo 8, máximo 78): "))
        generador = GeneradorPassword(longitud)
        contraseña = generador.generar()
        print("\nContraseña generada:", contraseña)

    except Exception as e:
        print("Error:", e)
