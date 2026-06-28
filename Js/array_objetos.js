
 // Crear array de objetos
 let objetos = [
    {id: 1, descripcion: "Objeto 1"},
    {id: 2, descripcion: "Objeto 2"},
    {id: 3, descripcion: "Objeto 3"}
];



let numeros = [1, 2, 3, 4, 5];

// forEach
numeros.forEach(numero => {
  console.log(numero);
});

// map
let cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados);

// filter
let pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);

// reduce
let suma = numeros.reduce((acumulado, numero) => acumulado + numero, 0);
console.log(suma);
