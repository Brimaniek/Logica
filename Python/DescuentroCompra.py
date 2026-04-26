compra = float(input("Ingrese el valor de la compra:"))

descuento = 0

if compra >= 1000:
    descuento = compra * 0.20
    compra -= descuento
    
else:
    print("No hay descuento")
    
    
print(f"La compra es : {compra},el descuento es : {descuento}")