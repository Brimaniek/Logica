// Crear arreglo de objetos
let productos = [
    {nombre: "Laptop", precio: 800},
    {nombre: "Tablet", precio: 400},
    {nombre: "Smartphone", precio: 600},
    {nombre: "Impresora", precio: 100},
    {nombre: "Teclado", precio: 20}
];

// Función para generar tabla HTML
function generarTabla() {
    let tabla = `<table>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>`;
    productos.forEach(function(producto) {
        tabla += `<tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                  </tr>`;
    });
    tabla += `</table>`;
    return tabla;
}

// Ejemplo de uso de la función
let tablaHTML = generarTabla();
console.log(tablaHTML);

// Variables para el correo electrónico
let nombre = "Juan";
let apellido = "Perez";
let edad = 30;
let correo = "juan.perez@ejemplo.com";

// Plantilla de correo electrónico
let plantilla = `Estimado ${nombre} ${apellido},

Espero que se encuentre bien. Me pongo en contacto con usted para informarle que tiene ${edad} años.
Si tiene alguna pregunta o necesidad, no dude en ponerse en contacto conmigo a través de este correo electrónico: ${correo}.

Atentamente,
Equipo de Ejemplo`;

console.log(plantilla);
