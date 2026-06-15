import javax.swing.*;
public class EntradaDatos{
  
    public static void main(String[] args) {

   String nombre_usuario = JOptionPane.showInputDialog("Introduce tu nombre : ");
   int  edad = Integer.parseInt(JOptionPane.showInputDialog("Introduce tu edad: "));
    double  salario = Double.parseDouble(JOptionPane.showInputDialog("Introduce tu salario: "));


    System.out.println("Te llamas : " + nombre_usuario + " y el a;o que viene tendras " + (edad+1) 
    " anos.Y tienes un salario de " + salario);
    

    }

}









}