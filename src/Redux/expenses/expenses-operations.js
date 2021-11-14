import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';

export const fetchExpenses = createAsyncThunk(
  'expense/fetchExpense',
  async () => {
    try {
      const { data } = await axios.get('/expenses');
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
)

export const addExpense = createAsyncThunk(
  'expense/addExpense',
  async ({ date, type, category, description, sum }) => {
    const expense = { date, type, category, description, sum };
    try {
      const { data } = await axios.get('/expenses', expense);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
)

export const deleteExpense = createAsyncThunk(
  'expense/deleteExpense',
  async (id) => {
    try {
      await axios.get('/expenses', id);
      return id;
    } catch (error) {
      console.log(error.message);
    }
  }
)
