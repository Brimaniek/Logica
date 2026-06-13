//Recorrer una letra.....
 let letra = "Javascript";

   for(let i = 0; i < letra.length; i++){
          console.log(letra[i]);
   }

//Buscar una letra especifica.....

let palabra = "JavaScript";

for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === "S") {
        console.log(`Encontrada en la posición ${i}`);
    }
}