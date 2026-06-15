const prompt = require("prompt-sync")();

console.log("\nSerie de Fibonacci\n");

let numero_positivo;

// Validación
do {
    numero_positivo = Number(prompt("Por favor, ingrese un número entero positivo mayor a 1: "));

    if (numero_positivo <= 1 || !Number.isInteger(numero_positivo)) {
        console.log("Error: el número debe ser un entero positivo mayor a 1. Intente de nuevo.\n");
    } 
} while (numero_positivo <= 1 || !Number.isInteger(numero_positivo));

// Mostrar la serie de Fibonacci
let anterior = 0;
let actual = 1;

console.log("\nSerie de Fibonacci:");
console.log(anterior);
console.log(actual);

for (let i = 3; i <= numero_positivo; i++) {
    let siguiente = anterior + actual;
    console.log(siguiente);

    anterior = actual;
    actual = siguiente;
}