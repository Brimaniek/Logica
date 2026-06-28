// Ejemplo de manejo de errores con try-catch
try {
    // Bloque de código que puede lanzar un error
    let resultado = 10 / 0;
    console.log(resultado);
} catch (error) {
    // Manejo del error
    console.error("Error:", error.message);
}

// Ejemplo de promesas con manejo de errores
fetch('https://jsonplaceholder.typicode.com/todoss/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));



    try {
        let resultado = 10 / 0; // Esto no genera error en JavaScript, pero es un ejemplo
        console.log(resultado);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("Esto siempre se ejecuta");
      }
      
      function lanzarError() {
        throw new Error("Algo salió mal");
      }
      
      try {
        lanzarError();
      } catch (error) {
        console.error(error.message);
      }
      