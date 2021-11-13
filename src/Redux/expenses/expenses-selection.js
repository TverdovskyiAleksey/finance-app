import { createSelector } from 'reselect';

const getExpenses = state => state.expenses.items;

const getLoading = state => state.expenses.loading;

const getVisibleExpenses = createSelector([getExpenses], (expenses, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return expenses.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getLoading,
  getVisibleExpenses,
  getExpenses,
};
