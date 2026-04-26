import numpy as np

"""Se necesita capturar por teclado 8 números enteros entre 3 y 6 ambos incluidos. 
Se debe establecer cuantas veces se repiten los números del 3 al 6 y hallar la potencia 
de cada uno de esos números de acuerdo con las veces que se repita. Se deben mostrar 
pantalla los 8 números capturados y las potencias de los números del 3 al 6.
"""

numeros = []
contador = {3: 0, 4: 0, 5: 0, 6: 0}

# Capturar 8 números válidos
while len(numeros) < 8:
    try:
        numero = int(input("Ingrese un número entre 3 y 6: "))
        
        if 3 <= numero <= 6:
            numeros.append(numero)
            contador[numero] += 1
        else:
            print("Error: debe estar entre 3 y 6.")
    
    except ValueError:
        print("Error: ingrese un número válido.")

# Mostrar números capturados
print("\nNúmeros ingresados:")
print(numeros)

# Calcular y mostrar potencias......
print("\nPotencias:")
for num in range(3, 7):
    repeticiones = contador[num]
    potencia = num ** repeticiones
    print(f"{num}^{repeticiones} = {potencia}")