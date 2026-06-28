import java.util.*;
import  javax.swing.JOptionPane;

public class  EjemploBucle {
    public static void main(String[] args) throws Exception {


        String clave = "Lunes festivo";
        String  pass = "";

        while(clave.equals(pass)== false){
          pass = JOptionPane.showInputDialog("Introduce tu Password ");

          if(clave.equals(pass)== false) system.out.println("Password incorrecta");



        }

             System.out.println("Acceso correcto");

        }
    }