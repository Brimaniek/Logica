// archivo1.js
export const saludo = "Hola";
export function saludar() {
  console.log(saludo);
}

// archivo2.js
import { saludo, saludar } from './archivo1.js';
console.log(saludo);
saludar();
