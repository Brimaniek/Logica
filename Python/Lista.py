porcentajes = [0.20,0.30,0.45,0.05]
notas = [] #nota vacias


# Calcular promedio ponderado
promedio = sum(notas[i] * porcentajes[i] for i in range(4))

# Mostrar resultado
if promedio < 3:
    print(f"Su promedio es: {promedio:.2f}, por lo tanto reprueba")
else:
    print(f"Su promedio es: {promedio:.2f}, por lo tanto aprueba")
    