const listOfExpenses = [];

function regularExpenses(category, description, amount, date) {
  const newExpense = {
    category: category,
    description: description,
    amount: amount,
    date: date
  };
  listOfExpenses.push(newExpense);
}

function calculateTotalAmount() {
  let total = 0;
  for (let i = 0; i < listOfExpenses.length; i++) {
    total += listOfExpenses[i].amount;
  }
  return total;
}

// Example expenses
regularExpenses('Food', 'Groceries', 50, '2023-07-13');
regularExpenses('Transportation', 'Gasoline', 30, '2023-07-14');
regularExpenses('Utilities', 'Electricity bill', 80, '2023-07-15');

const totalAmount = calculateTotalAmount();
console.log('Total amount of expenses:', totalAmount);
console.log(listOfExpenses)