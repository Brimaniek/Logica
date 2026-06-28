// Cambiar contenido de un elemento
let parrafo = document.getElementById("parrafo1");
parrafo.textContent = "Nuevo contenido para el párrafo";

// Agregar un nuevo elemento al DOM
let nuevoElemento = document.createElement("div");
nuevoElemento.textContent = "Este es un nuevo elemento";
document.body.appendChild(nuevoElemento);

// Modificar estilos CSS
nuevoElemento.style.color = "blue";
nuevoElemento.style.fontSize = "20px";

