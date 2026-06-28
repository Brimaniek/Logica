
let boton = document.getElementById("botonCrearDiv");
let contenedor = document.getElementById("contenedor");

boton.addEventListener("click", function() {
  let nuevoDiv = document.createElement("div");
  nuevoDiv.innerHTML = "Este es un nuevo div creado dinámicamente";
  contenedor.appendChild(nuevoDiv);
});


let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!nombre) {
    alert("Por favor ingresa tu nombre");
  } else if (!email) {
    alert("Por favor ingresa tu email");
  } else if (!password) {
    alert("Por favor ingresa tu contraseña");
  } else {
    alert("Datos enviados correctamente");
  }
});
