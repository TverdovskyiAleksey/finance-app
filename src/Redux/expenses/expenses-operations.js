import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';

export const fetchExpenses = createAsyncThunk(
  'expense/fetchExpense',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/expenses');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const addExpense = createAsyncThunk(
  'expense/addExpense',
  async ({ date, type, category, description, sum }, { rejectWithValue }) => {
    const expense = { date, type, category, description, sum };
    try {
      const { data } = await axios.get('/expenses', expense);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const deleteExpense = createAsyncThunk(
  'expense/deleteExpense',
  async (id, { rejectWithValue }) => {
    try {
      await axios.get('/expenses', id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)
