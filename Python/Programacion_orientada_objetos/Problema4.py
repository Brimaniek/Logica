#Encapsulamiento y métodos estáticos:
"""Crear una clase Usuario con un atributo privado _password. 
Añadir un método para cambiar la contraseña solo si se ingresa correctamente la actual.
"""

class Usuario:
    def  __init__(self,contrasena):
        self.contrasena= contrasena
      
 
    
def  __privado_password(self):
        print("Este es un metodo privado")
        
        
        def __cambiar_contrasena(self,contrasena_actual,nueva_contrasena):
              if contrasena_actual== self.contrasena:
                     self.contrasena= nueva_contrasena
                     print("Contrasena  fue cambiada con exito")
                  
              else: 
                  print("La contrasena no es correcta")