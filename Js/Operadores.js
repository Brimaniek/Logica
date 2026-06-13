const prompt = require("prompt-sync")();

let num1 = Number(prompt("Ingresa el numero 1: "));
let num2 = Number(prompt("Ingresa el numero 2: "));

let suma = num1 + num2;
let resta = num1 - num2;
let divi = num1 / num2;
let multi = num1 * num2;

console.log(`Suma es: ${suma}`);
console.log(`Resta es: ${resta}`);
console.log(`Multiplicacion es: ${multi}`);
console.log(`Division es: ${divi}`);