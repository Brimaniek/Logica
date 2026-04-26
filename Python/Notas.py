#Programa que pida:# nota 1 = 30% #nota 2= 40% #nota 3 = 50%

nota1 = float(input("Ingrese la nota 1 :"))
nota2 = float(input("Ingrese la nota 2 : "))
nota3 = float(input("Ingrese la nota 3: "))
nota4 = float(input("Ingrese la nota 4 : "))


nota1 *= 0.20
nota2 *= 0.30
nota3 *= 0.45
nota4 *= 0.05


promedio = nota1 + nota2 + nota3


print(f"El promedio de la nota es : {promedio: .2f}")