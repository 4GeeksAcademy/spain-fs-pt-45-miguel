//  IF -IF ELSE - ELSE
const legalAge = 18;
const userAge = 17;
const userMoney = 20.99;

const showPrice = 16.89;
const isLegalAgeRequired = false;

const hasEnoughMoney = userMoney >= showPrice;
const hasLegalAge = userAge >=18;


if (!hasEnoughMoney){
    console.log('No tienes suficiente dinero')
}

if (!hasLegalAge){
    console.log('No tienes edad duficiente para este evento')
}

if (hasEnoughMoney && hasLegalAge){
    console.log('Aqui tienes tu entrada')
}


if (!hasEnoughMoney){
    console.log('No tienes suficiente dinero')
}else if (!hasLegalAge){
    console.log('No tienes edad duficiente para este evento')
}else{
    console.log('Aqui tienes tu entrada')
}


// Switch
// const user = ['USER', 'ADMIN', 'AUTHOR'];
const userRole = 'USER'
switch(userRole){
    case 'USER':
        console.log('Bienvenido de nuevo!');
        break; //break sirve para parar la ejecucion del switch, se seguiria ejecutando lo demas que hay abajo
    case 'ADMIN':
        console.log('Hola, administrador');
        break;
    case 'AUTHOR':
        console.log('Hola, ahce mucho que no anades un post')
        break;
    default:
        console.log('Enviando reporte de bug')
}


// Bucles

