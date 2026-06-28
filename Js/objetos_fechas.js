// Objeto literal
let persona = {
    nombre: "Carlos",
    edad: 25,
    saludar: function() {
        return "Hola, soy " + this.nombre;
    }
};

console.log(persona.saludar());  // Imprime: Hola, soy Carlos

// Función constructora y prototipo
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function() {
    return "Hola, soy " + this.nombre;
};

let persona1 = new Persona("Ana", 30);
console.log(persona1.saludar());  // Imprime: Hola, soy Ana
