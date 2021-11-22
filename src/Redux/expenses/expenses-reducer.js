import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { fetchExpenses, addExpense, deleteExpense } from './expenses-operations';

const items = createReducer([], {
  [fetchExpenses.fulfilled]: (_, { payload }) => payload,
  [addExpense.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteExpense.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

const loading = createReducer(false, {
  [fetchExpenses.pending]: () => true,
  [fetchExpenses.fulfilled]: () => false,
  [fetchExpenses.rejected]: () => false,
  [addExpense.pending]: () => true,
  [addExpense.fulfilled]: () => false,
  [addExpense.rejected]: () => false,
  [deleteExpense.pending]: () => true,
  [deleteExpense.fulfilled]: () => false,
  [deleteExpense.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchExpenses.rejected]: (_, { payload }) => payload,
  [fetchExpenses.pending]: () => null,
});

export default combineReducers({
  items,
  // filter,
  loading,
  error,
});
