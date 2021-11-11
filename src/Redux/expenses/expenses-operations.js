import axios from 'axios';
import {
  fetchExpenseRequest,
  fetchExpenseSuccess,
  fetchExpenseError,
  addExpenseRequest,
  addExpenseSuccess,
  addExpenseError,
  deleteExpenseError,
  deleteExpenseRequest,
  deleteExpenseSuccess,
} from './expenses-action';

// axios.defaults.baseURL = 'http://localhost:3000';

// eslint-disable-next-line no-unused-vars
const fetchExpenses = () => async dispatch => {
  dispatch(fetchExpenseRequest());

  try {
    const { data } = await axios.get('/expenses');
    dispatch(fetchExpenseSuccess(data));
  } catch (error) {
    dispatch(fetchExpenseError(error));
  }
};

const addExpense =
  ({ name, number }) =>
  async dispatch => {
    const expense = { name, number };

    dispatch(addExpenseRequest());

    try {
      const { data } = await axios.post('/expenses', expense);
      dispatch(addExpenseSuccess(data));
    } catch (error) {
      dispatch(addExpenseError(error));
    }
  };

const deleteExpense = id => async dispatch => {
  dispatch(deleteExpenseRequest());

  axios
    .delete(`/expense/${id}`)
    .then(() => dispatch(deleteExpenseSuccess(id)))
    .catch(error => dispatch(deleteExpenseError(error)));
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { addExpense, deleteExpense, fetchExpenses };
