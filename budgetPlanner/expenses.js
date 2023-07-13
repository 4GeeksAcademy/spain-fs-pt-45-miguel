function regularExpenses(expenses, description, amount, date) {
  const newExpense = {
    description: description,
    amount: amount,
    date: date
  };
  expenses.push(newExpense);
  return newExpense;
}

console.log(regularExpenses('cafe','4kilos',20,'13/7/23'));

  
