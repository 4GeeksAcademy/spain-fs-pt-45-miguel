//Para ejecutar = $ node /workspaces/spain-fs-pt-45/budgetPlanner/Earnings/TrackingEarnings.js

const prompt = require('prompt-sync')({ sigint: true });

var Raul = {
    
}

// function userLog(name, money, monthEarn) {
//     this.name = name;
//     this.money = money;
//     this.monthEarn = monthEarn;
//   };

  let userRaul = new userLog("Raul", 2000, 1000)

  const name = String(prompt('Whats your name? '));

  if(typeof user$name !== 'object') {
      user$name = new userLog(name, "any", "any");
      
      let money = Number(prompt('How much money do you have? '));
      user$name.money = money;

      let monthEarn = Number(prompt('How much money do you earn monthly? '));
      user$name.monthEarn = monthEarn;
  }









  /*
const name = prompt('Whats your name? ');

if (user$name.name === false){
    users$name = new usersLog($name, "any")
}

if (user$name.money !== Number){
    let money = Number(prompt("How much money do you have? "))

    let user$name = usersLog(name, money)
}
*/

/*let totalMoney
let monthlyEarning
let extraEarning
let user = */