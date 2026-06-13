
let porcentajes = [0.20, 0.30, 0.05, 0.75];
let notas = [4.0, 3.5, 4.8, 5.0];

let promedio = 0;

for (let i = 0; i < 4; i++) {
    promedio += notas[i] * porcentajes[i];
}

console.log(`Promedio: ${promedio.toFixed(2)}`);