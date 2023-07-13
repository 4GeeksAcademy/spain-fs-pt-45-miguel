// IF - ELSE IF - ELSE

const legalAge = 18;

const userAge = 17;
const userMoney = 20.99;

const showPrice = 16.89;
const isLegalAgeRequired = false;

const hasEnoughMoney = userMoney >= showPrice;
const hasLegalAge = userAge >= legalAge;

if (!hasEnoughMoney) {
    console.log('No tienes suficiente cash! Rellena tu monedero!');
}

if (!hasLegalAge)  {
    console.log('No tienes edad suficiente para este evento!');
}

if (hasEnoughMoney && hasLegalAge) {
    console.log('Aqui tienes tu entrada');
}

// Else if - else (preferible la de arriba!!!)
if (!hasEnoughMoney) {
    console.log('No tienes suficiente cash! Rellena tu monedero!');
} else if (!hasLegalAge)  {
    console.log('No tienes edad suficiente para este evento!');
} else {
    console.log('Aqui tienes tu entrada');
}


// SWITCH
// const user = ['USER', 'ADMIN', 'AUTHOR'];
const userRole = 'SUPERADMIN';

switch (userRole) {
    case 'USER':
        console.log('Bienvenido de nuevo!');
        break;
    case 'ADMIN':
        console.log('Hola, administrador');
        break;
    case 'AUTHOR':
        console.log('Hola, hace mucho que no añades un post');
        break;
    default:
        console.log('Enviando reporte de bug...')
}

// BUCLES