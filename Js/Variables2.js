// Declarar variables para almacenar los valores de las dimensiones del rectángulo
let base= 5;
let altura = 10;


// Calcular el área del rectángulo
let areas = base * altura;

// Calcular el perímetro del rectángulo
let perimetros = 2 * (base + altura);

// Mostrar resultados en la consola
console.log(`El área del rectángulo es: ${area}`);
console.log(`El perímetro del rectángulo es: ${perimetro}`);

//Para pedirle al usuario que ingrese los valores de base y altura
let bases = prompt("Ingrese el valor de la base del rectángulo: ");
let alturas = prompt("Ingrese el valor de la altura del rectángulo: ");

// Convertir los valores de base y altura a números
base = Number(base);
altura = Number(altura);

// Calcular el área del rectángulo
let area = bases * alturas;

// Calcular el perímetro del rectánguloa
let perimetro = 2 * (base + altura);

// Mostrar resultados en la consola
console.log(`El área del rectángulo es: ${area}`);
console.log(`El perímetro del rectángulo es: ${perimetro}`);



// Variables
let nombre = "Juan";
const PI = 3.14;

// Tipos de datos
let numero = 42;
let texto = "Hola, Mundo";
let esVerdadero = true;
let arreglo = [1, 2, 3];
let objeto = { clave: "valor" };

// Operadores
let suma = 5 + 3;
let esIgual = (5 == '5'); // true
let esEstrictamenteIgual = (5 === '5'); // false
let y = true && false; // false
