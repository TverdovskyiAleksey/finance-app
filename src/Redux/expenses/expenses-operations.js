import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';

export const fetchExpenses = createAsyncThunk(
  'expense/fetchExpense',
  async () => {
    const { data } = await axios.get('/expenses');
    return data;
  }
)

export const addExpense = createAsyncThunk(
  'expense/addExpense',
  async ({ date, type, category, description, sum }) => {
    const expense = { date, type, category, description, sum };
    const { data } = await axios.get('/expenses', expense);
    return data;
  }
)

export const deleteExpense = createAsyncThunk(
  'expense/deleteExpense',
  async (id) => {
    await axios.get('/expenses', id);
    return id;
  }
)
