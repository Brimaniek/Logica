import java.util.*;

public class Mes {
    public static void main(String[] args) throws Exception {

  Scanner entrada = new Scanner(System.in);


       System.out.println(" Intro duce el numero del mes:");

            int numero_mes = entrada.nextInt();

switch(numero_mes){

            case 1:
                  System.out.println("Enero");
                  break;


    case 2:
                  System.out.println("Febrero");
                  break;

   case 3:
                  System.out.println("marzo");
                  break;


 case 4:
                  System.out.println("abril");
                  break;

                  
 case 5:
                  System.out.println("mayo");
                  break;

              
 case 6:
                  System.out.println("junio");
                  break;

   default:
     System.out.println("Numero del mes incorrecto");

}

     entrada.close();
    }

}