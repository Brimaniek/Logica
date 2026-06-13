
const prompt = require("prompt-sync")();

let compra = prompt("Ingresa el valor de la compra : ");

  let descuento = 0;

   if (compra >= 1000) {
          descuento = compra * 0.20;
          compra -= descuento;
   }else{
     console.log("No hay descuento");
   }

   console.log(`La compra es : ${compra}, el descuento es: ${descuento}`);