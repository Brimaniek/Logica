// Arrow functions
const sumar = (a, b) => a + b;
console.log(sumar(5, 3));  // Imprime: 8

// Template literals
let nombre1 = "María";
let edad1 = 28;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

// Destructuring
let persona1 = { nombre: "Juan", edad: 30 };
let { nombre, edad } = persona;
console.log(nombre);  // Imprime: Juan
console.log(edad);    // Imprime: 30


// let y const
let edad_anna = 25;
const nombre_actor = "Juan";

// Template literals
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);

// Destructuring
let persona = { nombre: "Ana", edad: 28 };
let { nombre: nombrePersona, edad: edadPersona } = persona;
console.log(nombrePersona, edadPersona);

// Spread operator
let arregloOriginal = [1, 2, 3];
let copiaArreglo = [...arregloOriginal];
console.log(copiaArreglo);

// Clases
class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  describir() {
    console.log(`Este vehículo es un ${this.marca} ${this.modelo}`);
  }
}
let miCoche = new Vehiculo("Toyota", "Corolla");
miCoche.describir();
