async function createExpense() {
  const title = document.getElementById('expense-title').value;
  const amount = document.getElementById('expense-amount').value;
  const category = document.getElementById('expense-category').value;

  const data = { title, amount, category };

  const res = await apiPost('/expenses', data);

  if (res._id) {
    alert('Expense added');
    fetchExpenses();
  } else {
    alert('Error adding expense: ' + res.message);
  }
}

async function fetchExpenses() {
  const expenses = await apiGet('/expenses');
  const listDiv = document.getElementById('expenses-list');
  listDiv.innerHTML = '';

  expenses.forEach(exp => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${exp.title}</strong> | ₹${exp.amount} | ${exp.category}<hr/>`;
    listDiv.appendChild(div);
  });
}

fetchExpenses();
