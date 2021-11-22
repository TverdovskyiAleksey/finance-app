import axios from 'axios';

export async function fetchExpenses() {
  const { data } = await axios.get('/api/expenses');
  return data;
}

export async function addExpense({ date, type, category, description, sum, amount }) {
  const expense = { date, type, category, description, sum, amount };
  const { data } = await axios.post('/api/expenses', expense);
  return data;
}

export async function deleteExpense(expenseId) {
  return await axios.delete(`/api/expenses/${expenseId}`);
}