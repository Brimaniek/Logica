import tkinter as tk
import random


def lanzar():
    resultado.config(text=random.choice(["cara", "cruz"]))

ventana = tk.Tk()
ventana.geometry("300x200")
ventana.title("Lanzar Moneda")

boton = tk.Button(text="Lanzar moneda", command=lanzar)
boton.pack(pady=40)

resultado = tk.Label(text="", font=("Arial", 20))
resultado.pack()

ventana.mainloop()