// Este array almacena los gastos
const listOfExpenses = [];

// Esta funcion es la que crea los gastos
function regularExpenses(category, description, amount, date) {
  const newExpense = {
    category: category,
    description: description,
    amount: amount,
    date: date
  };
  listOfExpenses.push(newExpense);
  return newExpense;
}

// Esta funcion calcula el coste total de todos los gastos en el array
function calculateTotalAmount() {
  let total = 0;
  for (let i = 0; i < listOfExpenses.length; i++) {
    total += listOfExpenses[i].amount;
  }
  return total;
}

regularExpenses('Food', 'Lidl', 50, '2023-07-13');
regularExpenses('Car', 'Gasoline', 30, '2023-07-14');
regularExpenses('Home', 'Electricty bill', 80, '2023-07-15');

// Se guarda el valor total en una variable
const totalExpenses = calculateTotalAmount();
console.log('Total amount of expenses:', totalExpenses);

// console.log(listOfExpenses)
