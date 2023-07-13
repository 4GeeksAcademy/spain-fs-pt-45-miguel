const listOfExpenses = [];

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

console.log(regularExpenses('cafe', '4kilos', 20, '13/7/23'));
console.log(regularExpenses('cafe', '4kilos', 20, '13/7/23'));
console.log(regularExpenses('cafe', '4kilos', 20, '13/7/23'));
console.log(listOfExpenses)
