import java.math.BigInteger;

public class UsoMath2 {
    public static void main(String[] args) {
        //int potencia =(int)Math.pow(25,560);

        

        BigInteger  base=BigInteger.valueOf(25);
                int exponente= 321;

        BigInteger  potencia=base.pow(exponente);

        System.out.println(potencia);

    }
}
