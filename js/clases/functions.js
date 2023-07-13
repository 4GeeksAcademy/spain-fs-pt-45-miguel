<<<<<<< HEAD
function myFirstFunction(){
    return
}


function addTwoNumbers(n1, n2){
    return result = n1 + n2;
}

console.log(addTwoNumbers(pepito = 1, grillo = 2))
=======
// Sintaxis tradicional

// Primero la defino...
function myFirstFuncion () {}
// ...y luego la ejecuto
myFirstFuncion();

let n1 = 10000000;
let n2 = 200000000;


// SCOPE - CONTEXTO
function addTwoNumbers (n1, n2) { // Shadowing
    const result = n1 + n2;
    return result;
}

console.log(addTwoNumbers(1, 2));
console.log(addTwoNumbers(n1, n2));
>>>>>>> origin/dev
