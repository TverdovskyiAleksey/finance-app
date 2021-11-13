import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addExpenseRequest,
  addExpenseSuccess,
  addExpenseError,
  deleteExpenseError,
  deleteExpenseRequest,
  deleteExpenseSuccess,
  // changeFilter,
  // fetchExpenseError,
  // fetchExpenseRequest,
  // fetchExpenseSuccess,
} from './expenses-action';
import fetchExpenses from './expenses-operations';

const transactionList = [
  { id: 'id-1', date: '04.01.2021', type: '+', category: 'Регулярный доход', description: 'Бонус за январь', sum: 8000 },
  { id: 'id-2', date: '05.01.2021', type: '-', category: 'Разное', description: 'Подарок жене', sum: 3000 },
  { id: 'id-3', date: '07.01.2021', type: '+', category: 'Машина', description: 'Масло', sum: 1000 },
  { id: 'id-4', date: '07.01.2021', type: '-', category: 'Продукты', description: 'Овощи на неделю', sum: 320 },
  { id: 'id-5', date: '08.01.2021', type: '+', category: 'Нерегулярный доход', description: 'Подарок на др', sum: 1500 },
  { id: 'id-6', date: '09.01.2021', type: '-', category: 'Здоровье', description: 'Мартини', sum: 200 },
  { id: 'id-7', date: '10.01.2021', type: '-', category: 'Разное', description: 'Поездка', sum: 1500 },
]

const items = createReducer(transactionList, {
  [fetchExpenses.fulfilled]: (_, { payload }) => payload,
  [addExpenseSuccess.fulfilled]: (state, { payload }) => [...state, payload],
  // [deleteExpenseSuccess]: (state, { payload }) =>
  //   state.filter(({ id }) => id !== payload),
});

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

const loading = createReducer(false, {
  [fetchExpenses.pending]: () => true,
  [fetchExpenses.fulfilled]: () => false,
  [fetchExpenses.rejected]: () => false,
  [addExpenseRequest]: () => true,
  [addExpenseSuccess]: () => false,
  [addExpenseError]: () => false,
  [deleteExpenseRequest]: () => true,
  [deleteExpenseSuccess]: () => false,
  [deleteExpenseError]: () => false,
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
