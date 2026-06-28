/*Crear una clase llamada "Alumno" con las propiedades "nombre", "edad" y "notas" 
(un arreglo de números). La clase debe tener un método "promedio" que devuelva el promedio de las notas del alumno.
*/


class Alumno {
    constructor(nombre, edad, notas) {
        this.nombre = nombre;
        this.edad = edad;
        this.notas = notas;
    }

    promedio() {
        if (this.notas.length === 0) {
            return 0; // Si no hay notas, el promedio es 0.
        }

        const suma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        const promedio = suma / this.notas.length;

        return promedio;
    }
}

// Ejemplo de uso
const alumno1 = new Alumno("Juan", 20, [90, 85, 78, 92, 88]);
const promedioAlumno1 = alumno1.promedio();
console.log(`El promedio de ${alumno1.nombre} es ${promedioAlumno1}`);
