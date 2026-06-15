import java.util.*;

public class Mes {
    public static void main(String[] args) throws Exception {

  Scanner entrada = new Scanner(System.in);


       System.out.println(" Intro duce el numero del mes:");

            int numero_mes = entrada.nextInt();

switch(numero_mes){

            case 1:
                  System.out.println("Enero");
                  break;// salir del bloque actual


    case 2:
                  System.out.println("Febrero");
                  break; // salir del bloque actual

   case 3:
                  System.out.println("marzo");
                  break; // salir del bloque actual


 case 4:
                  System.out.println("abril");
                  break; // salir del bloque actual

                  
 case 5:
                  System.out.println("mayo");
                  break; // salir del bloque actual

              
 case 6:
                  System.out.println("junio");
                  break; // salir del bloque actual

   default:
     System.out.println("Numero del mes incorrecto");

}

     entrada.close();
    }

}

------------------------------------------------------------------------------------
// Caso con varias instrucciones.........

int numero = 2;

String resultado = switch (numero) {

    case 1 -> {
        System.out.println("Procesando 1");
        yield "Uno";
    }

    case 2 -> {
        System.out.println("Procesando 2");
        yield "Dos";
    }
    default -> {
        yield "Otro";
    }
};


System.out.println(resultado);