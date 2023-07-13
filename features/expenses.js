function regularExpenses (expense, description, amount, date) {
    const newExpense = {
      description: description,
      amount: amount,
      date: date
    };
    expense.push(newExpense);
  }
  
  console.log(regularExpenses('cafe','7kg',50,'13/7/23'))
  

  