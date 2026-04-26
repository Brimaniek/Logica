porcentajes = [0,20,0.30,0.45,0.05]
notas = [] #nota vacias


for i in range(4):
    nota = float(input(f"Ingrese la nota {i+1} (0-5): "))
    
    while nota < 0 or nota > 5:
        print("Error: la nota debe estar entre 0 y 5")
        nota = float(input(f"Ingrese la nota {i+1} (0-5): "))
    
    notas.append(nota)

    
    
# Calcular promedio ponderado
promedio = sum(notas[i] * porcentajes[i] for i in range(4))

# Mostrar resultado
if promedio < 3:
    print(f"Su promedio es: {promedio:.2f}, por lo tanto reprueba")
else:
    print(f"Su promedio es: {promedio:.2f}, por lo tanto aprueba")
    