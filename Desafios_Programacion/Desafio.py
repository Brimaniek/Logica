import sys
import math

def solve():
    # Leer toda la entrada de la consola
    input_data = sys.stdin.read().split()
    if not input_data:
        return
        
    # N es el número de tiradores en el campo
    N = int(input_data[0])
    
    players = []
    idx = 1
    for _ in range(N):
        x = float(input_data[idx])
        y = float(input_data[idx+1])
        r = float(input_data[idx+2])
        players.append((x, y, r))
        idx += 3

    # El campo mide de 0 a 1000 en X e Y
    # Inicializamos los límites de entrada (Oeste) y salida (Este) con el máximo posible (Y = 1000)
    min_entry_y = 1000.0
    min_exit_y = 1000.0
    
    # Creamos un grafo de adyacencia para saber qué círculos se tocan
    adj = [[] for _ in range(N)]
    for i in range(N):
        for j in range(i + 1, N):
            x1, y1, r1 = players[i]
            x2, y2, r2 = players[j]
            dist = math.sqrt((x1 - x2)**2 + (y1 - y2)**2)
            if dist <= r1 + r2:
                adj[i].append(j)
                adj[j].append(i)

    visited = [False] * N
    blocked = False

    # Analizamos los componentes conectados
    for i in range(N):
        if not visited[i]:
            # Guardamos las extensiones del componente actual
            component = []
            queue = [i]
            visited[i] = True
            
            touches_west = False
            touches_east = False
            touches_north = False
            touches_south = False
            
            # Límites locales del bloqueo en las paredes verticales
            top_block_west = 0.0
            bottom_block_west = 1000.0
            top_block_east = 0.0
            bottom_block_east = 1000.0

            while queue:
                curr = queue.pop(0)
                component.append(curr)
                cx, cy, cr = players[curr]
                
                # Comprobar colisiones con las fronteras del mapa
                if cx - cr <= 0:
                    touches_west = True
                    # Calcular dónde intersecta el círculo a la pared Oeste (x = 0)
                    dy = math.sqrt(max(0.0, cr**2 - cx**2))
                    bottom_block_west = min(bottom_block_west, cy - dy)
                    top_block_west = max(top_block_west, cy + dy)
                    
                if cx + cr >= 1000:
                    touches_east = True
                    # Calcular dónde intersecta el círculo a la pared Este (x = 1000)
                    dy = math.sqrt(max(0.0, cr**2 - (1000 - cx)**2))
                    bottom_block_east = min(bottom_block_east, cy - dy)
                    top_block_east = max(top_block_east, cy + dy)
                    
                if cy + cr >= 1000:
                    touches_north = True
                if cy - cr <= 0:
                    touches_south = True

                for neighbor in adj[curr]:
                    if not visited[neighbor]:
                        visited[neighbor] = True
                        queue.append(neighbor)
            
            # Si un grupo de círculos conecta la pared Norte con la Sur, o la Oeste con la Este:
            if (touches_west and touches_east) or (touches_north and touches_south):
                blocked = True
                break
                
            # Si el componente bloquea la parte superior del borde Oeste, baja nuestra entrada máxima
            if touches_west and top_block_west >= 1000.0:
                min_entry_y = min(min_entry_y, bottom_block_west)
            # Si el componente bloquea la parte superior del borde Este, baja nuestra salida máxima
                
    if blocked or min_entry_y < 0 or min_exit_y < 0:
        print("IMPOSIBLE")
    else:
        # Formatear la salida con los 2 decimales exigidos por el juez en línea
        print(f"0.00 {min_entry_y:.2f} 1000.00 {min_exit_y:.2f}")

if __name__ == '__main__':
    solve()
