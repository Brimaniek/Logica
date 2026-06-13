#Imprimir un número entero: el número mínimo de operaciones
#  tales que la cadena se vuelve “ lv ”-able.

n = int(input())
s = input()

# Caso 0 operaciones
if "lv" in s:
    print(0)

else:
    possible = False

    for i in range(n - 1):
        pair = s[i:i+2]

        # Podemos arreglarlo con 1 operación
        if pair == "vl":
            possible = True

        elif pair[0] == 'l':
            possible = True

        elif pair[1] == 'v':
            possible = True

    if possible:
        print(1)
    else:
        print(2)