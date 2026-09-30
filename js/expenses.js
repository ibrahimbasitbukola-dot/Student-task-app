function totalExpenses(expenses) { return expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0); }
