/*Programa que pida:# nota 1 = 37% #nota 2= 50% #nota 3 = 70%*/

const prompt = require("prompt-sync")();


 let nota1 = Number(prompt("Ingrese la nota 1: "));
 let nota2 = Number(prompt("Ingrese la nota 2: "));
 let nota3 = Number(prompt("Ingrese la nota 2: "));


  nota1 *= 0.37;
  nota2 *= 0.05;
  nota3 *= 0.70;



 // Promedio....
 let promedio = nota1 + nota2 + nota3;

 console.log(`El promedio de las notas es : ${promedio.toFixed(2)}`);