//Crear una función llamada "calcularPromedio" que reciba un arreglo de números como parámetro
// y devuelva el promedio de los números del arreglo.


function calcularPromedio(numeros) {
    let suma = 0;

    numeros.forEach(function(numero) {
        suma += numero;
    });

    return suma / numeros.length;
}

const arregloDeNumeros = [1, 2, 3, 4, 5];
const promedio = calcularPromedio(arregloDeNumeros);
console.log(promedio); // Debería mostrar el promedio en la consola (3)
