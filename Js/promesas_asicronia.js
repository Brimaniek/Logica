// Ejemplo de promesa
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

esperar(2000).then(() => {
    console.log("Espera terminada después de 2 segundos");
});

// Ejemplo de async/await
async function obtenerDatos() {
    let respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let datos = await respuesta.json();
    return datos;
}

obtenerDatos().then(datos => console.log(datos));




// Callback
setTimeout(() => {
    console.log("Esto es un callback");
  }, 1000);
  
  // Promesas
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa resuelta"), 1000);
  });
  promesa.then(result => console.log(result)).catch(error => console.error(error));
  
  // Async/Await
  async function fetchData() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
  