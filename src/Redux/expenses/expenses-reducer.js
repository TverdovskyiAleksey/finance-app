import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addExpenseRequest,
  addExpenseSuccess,
  addExpenseError,
  deleteExpenseError,
  deleteExpenseRequest,
  deleteExpenseSuccess,
  changeFilter,
  fetchExpenseError,
  fetchExpenseRequest,
  fetchExpenseSuccess,
} from './expenses-action';

const items = createReducer([], {
  [fetchExpenseSuccess]: (_, { payload }) => payload,
  [addExpenseSuccess]: (state, { payload }) => [...state, payload],
  [deleteExpenseSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchExpenseRequest]: () => true,
  [fetchExpenseSuccess]: () => false,
  [fetchExpenseError]: () => false,
  [addExpenseRequest]: () => true,
  [addExpenseSuccess]: () => false,
  [addExpenseError]: () => false,
  [deleteExpenseRequest]: () => true,
  [deleteExpenseSuccess]: () => false,
  [deleteExpenseError]: () => false,
});

const error = createReducer(null, {
  [fetchExpenseError]: (_, { payload }) => payload,
  [fetchExpenseRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
