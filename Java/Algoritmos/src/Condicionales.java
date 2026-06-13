import java.util.*;

public class Condicionales {
    public static void main(String[] args) throws Exception {

  Scanner entrada = new Scanner(System.in);


   System.out.println("Introduce tu edad: ");
 
       int  edad = entrada.nextInt();
     
     
       if(edad <= 18)
       System.out.println("Es menor de edad");
      
       else if(edad > 35)
       System.out.println("Eres joven adulto");
      
       else {
       System.out.println("No existe edad");
 }


          entrada.close();
    
    }
}



