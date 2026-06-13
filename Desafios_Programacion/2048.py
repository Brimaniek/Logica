"""Imprime cuatro líneas con cuatro números enteros cada una. Dos números enteros en una línea 
deben estar separados por un solo espacio. Esto describe el nuevo estado del
Cuadrícula del rompecabezas 2048. Nuevamente, el número entero 0 representa una celda vacía. 
Tenga en cuenta que, en este problema, puede ignorar la parte del rompecabezas 2048 donde 
se introduce una nueva ficha aleatoria,con un valor de 2 o 4 en un espacio vacío del tablero al comienzo
de un nuevo turno."""

def mover_izquierda(fila):

    nueva = []

    for x in fila:
        if x != 0:
            nueva.append(x)

    resultado = []

    i = 0

    while i < len(nueva):

        if i + 1 < len(nueva) and nueva[i] == nueva[i+1]:
            resultado.append(nueva[i] * 2)
            i += 2
        else:
            resultado.append(nueva[i])
            i += 1

    while len(resultado) < 4:
        resultado.append(0)

    return resultado


board = []

for _ in range(4):
    fila = list(map(int, input().split()))
    board.append(fila)

direction = int(input())


# izquierda
if direction == 0:

    for i in range(4):
        board[i] = mover_izquierda(board[i])


# arriba
elif direction == 1:

    for j in range(4):

        columna = []

        for i in range(4):
            columna.append(board[i][j])

        columna = mover_izquierda(columna)

        for i in range(4):
            board[i][j] = columna[i]


# derecha
elif direction == 2:

    for i in range(4):
        fila = board[i][::-1]
        fila = mover_izquierda(fila)
        board[i] = fila[::-1]


# abajo
elif direction == 3:

    for j in range(4):

        columna = []

        for i in range(4):
            columna.append(board[i][j])

        columna.reverse()

        columna = mover_izquierda(columna)

        columna.reverse()

        for i in range(4):
            board[i][j] = columna[i]


for fila in board:
    print(*fila)