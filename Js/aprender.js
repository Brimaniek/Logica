"use strict";

let nombre = 'bibi';
nombre =  "123.456";
console.log(nombre);



alert( typeof "hola mundo");
prompt("introduce tu nombre");



let  edad = prompt("Introduce tu edad",24);
alert("Tu edad es:  " + edad);

let b = confirm("Estas seguro de borrar la lista")

alert(b);

console.log("hola", + edad);
console.error("no has hecho click");



 let a = 1;
let b= 2;

let c = 3 -(a= b **  1);
//alert(a);
//alert(b);
//alert(c);

let n= 2;
n = n + 1;

alert(n);

let compras = prompt("Pide el helado");
if(compras === helado){
     alert("compra uno de la lista", 4);

}else if(compra === 0){
alert("Es cero");

} else{
    alert("no es correcto");
}

switch(compras){

    case 1: helado;
    alert("compra uno de la lista");
    break




}

let i = 0;

for( i = 0; 1 <3; i++){
    alert(i++);
}


for (let step = 0; step < 5; step++) {
    // Se ejecuta 5 veces, con valores del paso 0 al 4.
    console.log("Camina un paso hacia el este");
  }
  

  let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}



for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}

var persona = {
    nombre: ["Bob", "Smith"],
    edad: 32,
    genero: "masculino",
    intereses: ["música", "esquí"],
    bio: function () {
      alert(
        `${this.nombre[0]} ${this.nombre[1]} tiene ${this.edad} años. Le gusta ${this.intereses[0]} y this.intereses[1].`,
      );
    },
    saludo: function () {
      alert("Hola, Soy " + this.nombre[0] + ". ");
    },
  };
  

  persona.nombre;
  persona.nombre[0];
  persona.edad;
  persona.intereses[1];
  persona.bio();
  persona.saludo();
  
  var persona1 = {
    nombre: "Chris",
    saludo: function () {
      alert("¡Hola!, Soy " + this.nombre + ".");
    },
  };
  
  var persona2 = {
    nombre: "Brian",
    saludo: function () {
      alert("¡Hola!, Soy " + this.nombre + ".");
    },
  };
  



//arreglos en javascript.....
//Un arreglo en JavaScript es un objeto que almacena una colección ordenada de elementos.
// Los elementos pueden ser de cualquier tipo, como números, cadenas o incluso otros objetos. 
//Los arreglos se pueden crear utilizando el constructor Array o mediante la notación de corchetes []. 
//Los elementos de un arreglo se pueden acceder mediante su índice, que comienza en 0. JavaScript también
// proporciona varios métodos para manipular arreglos, como push, pop, shift, unshift, etc.