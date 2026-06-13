import sys

def solve():
    # Leer el porcentaje N desde la entrada estándar
    lines = sys.stdin.read().split()
    if not lines:
        return
    N = float(lines[0])
    
    # Calcular los ratios de pago para ambas opciones
    payout_option_1 = 100.0 / N
    payout_option_2 = 100.0 / (100.0 - N)
    
    # Imprimir los resultados con alta precisión decimal
    print(f"{payout_option_1:.10f}")
    print(f"{payout_option_2:.10f}")

if __name__ == '__main__':
    solve()
