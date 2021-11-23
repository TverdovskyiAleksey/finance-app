import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as expensesAPI from '../../Services/expense-api';

const options = {
  autoClose: 3000,
  hideProgressBar: false,
  position: toast.POSITION.TOP_RIGHT,
  pauseOnHover: true,
  closeOnClick: true,
};

export const fetchExpenses = createAsyncThunk(
  'expense/fetchExpense',
  async () => {
    const expenses = await expensesAPI.fetchExpenses();
    return expenses;
  }
)

export const addExpense = createAsyncThunk(
  'expense/addExpense',
  async (data, { rejectWithValue }) => {
    try {
      const expense = await expensesAPI.addExpense(data);
      return expense;
    } catch (error) {
      toast.error(`${error}`, options);
      return rejectWithValue(error);
    }
  }
)

export const deleteExpense = createAsyncThunk(
  'expense/deleteExpense',
  async (id, { rejectWithValue }) => {
    try {
      await expensesAPI.deleteExpense(id);
      return id;
    } catch (error) {
      toast.error(`${error}`, options);
      return rejectWithValue(error);
    }
  }
)
