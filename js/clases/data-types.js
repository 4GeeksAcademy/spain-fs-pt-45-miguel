// Determina que operaciones puedo hacer

// PRIMITIVES

const userage = 20;
const legalAge = 18;
let isLegalAge = userage >= legalAge;


// STRING
// Texto - finalidad de representación de datos
// const myFirstString = 'This is a "string"!';
const myFirstString = "This is a 'string'!";
const myTitle = "Hello, world";
const templateLiteral = `This
is
a
string ${myTitle}`; // Puedo hacer los saltos de linea
console.log(templateLiteral)

templateLiteral.toUpperCase();

console.log(myFirstString + myTitle)
console.log(`${myFirstString} ${myTitle}`)

// NUMBER
// Operaciones matematicas
// Solo hay un tipo number
console.log(typeof 1);
console.log(typeof 1.1);

const randomNumber = Math.random()*10 +1;

console.log(Math)

// BOOLEAN

console.log(1 == 1)
console.log('1' == 1) // Compara solo valor

console.log('1' === 1) // Compara valor y tipo

console.log('1' >= 1) // Convierte a numero directamente

// con todas las comparaciones vamos a recibir un booleano, hacen un casteo automatico

console.log(0 == false) // lo va a intentar castear

console.log(Boolean(0)) // --> false (tambien con null, undefined, NaN, 0, string vacio), Cualqueir otra cosa va a hacer true

// NULL
const nullData = null;
// estoy seguro de que esta vacio
// UNDEFINED

const undefineData = undefined; // puede que vaya a haber un valor dentro
// SIMBOLS


// ARRAY

const myArray = [1, 'a', nullData]; 
// longitud variable, puede meter y sacar elemento

console.log(myArray.length);

console.log(myArray[myArray.length-1]);

console.log(Math.floor(Math.random()*myArray.length));
console.log(myArray[0] = 'Hello');

// metodos importantes
// Transformaciones o busquedas 
// .filter
// .map
// .find
// .forEach

// Comparaciones
// .some
// .includes
// .every
// .shift
// .unshift
// .poo
// .push

// problemas de acceder por posicion es que si cambia el array no lo voy a encontrar

// OBJECT - FUNCTION - "TODO ES UN OBJETO"

const myUser = {
    name: 'Raspas',
    age: 20
}

console.log(myUser.name)

const importantKey = 'name'
console.log(importantKey)
// cuando tenemos que utilizar una variable accedemos con corchetes
console.log(myUser['name'])

myUser.name = 'Zari';
console.log(myUser)


delete myUser.age;


// si guardo valores en un objeto lo llamo propiedad pero si tenfgo una funcion lo llamo metodo

