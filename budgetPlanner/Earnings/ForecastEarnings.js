//Para ejecutar = $ node /workspaces/spain-fs-pt-45/budgetPlanner/Earnings/ForecastEarnings.js

const prompt = require('prompt-sync')({ sigint: true });

const name = prompt('Whats your name? ');
console.log(`Hi, ${name}`)
const currency = prompt('What type of currency will you use (€, $) ')
let actualEarning = Number(prompt('How much money do you have? '));
const mensualEarning = Number(prompt('How much money do you earn monthly? '))
let forecastTime = Number(prompt('How much months do you want forecast? '))
let haveCasualEarning = prompt('Do you have any extra earning? ("Yes" or "No") ')
let casualEarning = 0

    if (haveCasualEarning == "Yes"){
        casualEarning = Number(prompt('How much extra money do you earn? '))
    }


function actualBaseMoney(aE, mE, fT, cE) {
    let result = aE + (mE*fT) + cE;
    return result;
};

let answer1 = `You will have ${actualBaseMoney(actualEarning, mensualEarning, forecastTime, casualEarning)}${currency} ` 

console.log(answer1)









