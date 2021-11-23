import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchExpenses,
  addExpense,
  deleteExpense,
} from './expenses-operations';

import { updateFilterAction } from './expenses-action';

const items = createReducer([], {
  [fetchExpenses.fulfilled]: (_, { payload }) => payload,
  [addExpense.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteExpense.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer(null, {
  [updateFilterAction]: (_, { payload }) => payload,
});

// const filter = createReducer({month:'',year:''}, {
//   [updateFilterAction]: (state, { payload }) =>  [...state, payload],
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
  filterReducer,
  loading,
  error,
});
