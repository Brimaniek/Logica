//Crear un objeto utilizando un constructor
let miObjeto = {};
miObjeto.propiedad1 = "valor1";
miObjeto.propiedad2 = "valor2";

function Automovil(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }
  
  let auto1 = new Automovil("Toyota", "Camry", 2020);
  let auto2 = new Automovil("Honda", "Civic", 2019);
  let auto3 = new Automovil("Chevrolet", "Cruze", 2018);
  
  console.log(auto1); // Output: { marca: "Toyota", modelo: "Camry", anio: 2020 }
console.log(auto2); // Output: { marca: "Honda", modelo: "Civic", anio: 2019 }
console.log(auto3); // Output: { marca: "Chevrolet", modelo: "Cruze", anio: 2018 }



// Crear array de objetos
let objetos = [
    {id: 1, descripcion: "Objeto 1"},
    {id: 2, descripcion: "Objeto 2"},
    {id: 3, descripcion: "Objeto 3"}
];

// Función para listar objetos
function listarObjetos() {
    console.log("Listando objetos:");
    objetos.forEach(function(objeto) {
        console.log("Id: " + objeto.id + ", Descripción: " + objeto.descripcion);
    });
}

// Función para insertar objeto
function insertarObjeto(nuevoObjeto) {
    objetos.push(nuevoObjeto);
    console.log("Objeto insertado con éxito. Id: " + nuevoObjeto.id + ", Descripción: " + nuevoObjeto.descripcion);
}

// Función para eliminar objeto
function eliminarObjeto(id) {
    let index = objetos.findIndex(function(objeto) {
        return objeto.id === id;
    });
    if (index === -1) {
        console.log("No se encontró el objeto con id: " + id);
    } else {
        objetos.splice(index, 1);
        console.log("Objeto eliminado con éxito. Id: " + id);
    }
}

// Ejemplos de uso de las funciones
listarObjetos();
insertarObjeto({id: 4, descripcion: "Objeto 4"});
listarObjetos();
eliminarObjeto(3);
listarObjetos();





// Objetos
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
      console.log("Hola, soy " + this.nombre);
    }
  };
  persona.saludar();
  
  // Prototipos
  function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  Persona.prototype.saludar = function() {
    console.log("Hola, soy " + this.nombre);
  };
  let juan = new Persona("Juan", 30);
  juan.saludar();
  
  // Clases
  class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
    hacerSonido() {
      console.log(this.nombre + " hace un sonido");
    }
  }
  let perro = new Animal("Perro");
  perro.hacerSonido();
  