import java.util.*;

public class OperadorTernario {
    public static void main(String[] args) throws Exception {

  Scanner entrada = new Scanner(System.in);


   System.out.println("Introduce tu edad: ");
 
       int  edad = entrada.nextInt();
     
     
          String Resultado =(edad <= 18)? "Eres  menor  de edad" : "Eres mayor de edad";

          System.out.println(Resultado);


    entrada.close();
}
}