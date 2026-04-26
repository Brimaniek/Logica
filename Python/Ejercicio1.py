
nombre = input("Ingrese su nombre: ")
print(f"Bienvenido/a {nombre}")

# Pedir datos de la venta
precio_inicial = float(input("Ingrese el precio inicial por kilo: "))
tipo_papa = input("Ingrese el tipo de papa (Pastusa o Sabanera): ").lower()
tamano = int(input("Ingrese el tamaño (1 o 2): "))
kilos = float(input("Ingrese la cantidad de kilos vendidos: "))

 #Validaciones
if precio_inicial <= 0:
    print("Error: el precio inicial debe ser mayor que 0")
else:
    if tamano != 1 and tamano != 2:
        print("Error: el tamaño solo puede ser 1 o 2")
    else:
        
        #Cálculo del precio final según tipo y tamaño
        precio_final = precio_inicial

        if tipo_papa == "pastusa":
            if tamano == 1:
                precio_final += 2000
            else:
                precio_final += 3000

        elif tipo_papa == "sabanera":
            if tamano == 1:
                precio_final -= 4000
            else:
                precio_final -= 5000
        else:
            print("Error: tipo de papa no válido")
            precio_final = None

        #Mostrar ganancia
        if precio_final is not None:
            ganancia = precio_final * kilos
            print(f"Precio final por kilo: ${precio_final}")
            print(f"Ganancia total obtenida: ${ganancia}")
