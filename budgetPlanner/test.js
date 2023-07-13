const prompt = require('prompt-sync')({ sigint: true });

const name = prompt('¿Cómo te llamas?');
console.log(`Hola, ${name}`)