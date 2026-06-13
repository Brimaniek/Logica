"""Clase Restaurante con Menú y Órdenes: Crea una clase
Restaurante que tenga un atributo menu (una lista de platos
disponibles, cada uno como un diccionario con nombre, precio y
tiempo_preparacion). Añade métodos agregar_plato(plato) para
agregar un plato al menú, ver_menu() que muestre el menú
completo, y realizar_orden(lista_platos) que calcule el costo total
y el tiempo de preparación estimado para una lista de platos
ordenados. Prueba esta clase simulando varias órdenes y
mostrando los resultados."""

import tkinter as tk


class Restaurante:

    def __init__(self):

        self.menu = []


    def agregar_plato(self, plato):

        self.menu.append(plato)


    def ver_menu(self):

        texto = ""

        for plato in self.menu:

            texto += (
                f"Nombre: {plato['nombre']}\n"
                f"Precio: ${plato['precio']}\n"
                f"Tiempo preparación: {plato['tiempo_preparacion']} minutos\n\n"
            )

        return texto


    def realizar_orden(self, lista_platos):

        total = 0
        tiempo_total = 0

        for plato in lista_platos:

            total += plato["precio"]
            tiempo_total += plato["tiempo_preparacion"]

        return total, tiempo_total


restaurante = Restaurante()


plato1 = {
    "nombre": "Sopa pollo",
    "precio": 20000,
    "tiempo_preparacion": 30
}

plato2 = {
    "nombre": "Arroz con tocineta",
    "precio": 50000,
    "tiempo_preparacion": 45
}

plato3 = {
    "nombre": "Arroz con pollo",
    "precio": 70000,
    "tiempo_preparacion": 120
}


restaurante.agregar_plato(plato1)
restaurante.agregar_plato(plato2)
restaurante.agregar_plato(plato3)



ventana = tk.Tk()

ventana.title("Restaurante")




def mostrar_menu():

    resultado.delete("1.0", tk.END)

    resultado.insert(
        tk.END,
        restaurante.ver_menu()
    )


def hacer_orden():

    orden = [plato1, plato2]

    total, tiempo = restaurante.realizar_orden(orden)

    resultado.delete("1.0", tk.END)

    resultado.insert(
        tk.END,
        f"Total a pagar: ${total}\n"
        f"Tiempo estimado: {tiempo} minutos"
    )



boton_menu = tk.Button(
    ventana,
    text="Ver menú",
    command=mostrar_menu
)

boton_menu.pack()


boton_orden = tk.Button(
    ventana,
    text="Realizar orden",
    command=hacer_orden
)

boton_orden.pack()


resultado = tk.Text(
    ventana,
    height=15,
    width=40
)

resultado.pack()


ventana.mainloop()


