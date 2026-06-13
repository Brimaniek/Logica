const prompt = require("prompt-sync")();


let num;

// Usamos un bucle do...while para repetir la pregunta hasta que el número sea válido
do {
  num = Number(prompt("Ingresa el numero:"));
  
  // Validamos si es un entero positivo
  if (num > 0 && Number.isInteger(num)) {
    console.log("¡Número válido! El ciclo terminará.");
    break; // Rompe el bucle porque el número es correcto
  } else {
    console.log("ERROR!. El numero no es entero positivo");
  }

} while (true); // Bucle infinito hasta que se cumpla la condición del 'break'

// El código continuará ejecutándose aquí después del break


