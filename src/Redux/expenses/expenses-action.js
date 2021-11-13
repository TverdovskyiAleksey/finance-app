import { createAction } from '@reduxjs/toolkit';

// export const fetchExpenseRequest = createAction('expense/fetchExpenseRequest');
// export const fetchExpenseSuccess = createAction('expense/fetchExpenseSuccess');
// export const fetchExpenseError = createAction('expense/fetchExpenseError');

export const addExpenseRequest = createAction('expense/addExpenseRequest');
export const addExpenseSuccess = createAction('expense/addExpenseSuccess');
export const addExpenseError = createAction('expense/addExpenseError');

export const deleteExpenseRequest = createAction(
  'expense/deleteExpenseRequest',
);
export const deleteExpenseSuccess = createAction(
  'expense/deleteExpenseSuccess',
);
export const deleteExpenseError = createAction('expense/deleteExpenseError');
