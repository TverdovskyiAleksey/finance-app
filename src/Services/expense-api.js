import axios from 'axios';

export async function fetchExpenses() {
  const { data } = await axios.get('/expenses');
  return data;
}

export async function addExpenses({ date, type, category, description, sum }) {
  const expense = { date, type, category, description, sum };
  const { data } = await axios.post('/expenses', expense);
  return data;
}

export async function deleteExpenses(expenseId) {
  return await axios.delete(`/expenses/${expenseId}`);
}