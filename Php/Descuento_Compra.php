<?php

$compra = readline("Ingrese el valor de la compra:");
         $descuento = 0;

         if($compra >= 1000){
              $descuento = $compra * 0.20;
              $compra -= $descuento;
         }else{
            echo("Nohay descuento");
         }
           
         echo "La compra es " . $compra .  " El descuento ". $descuento;



?>