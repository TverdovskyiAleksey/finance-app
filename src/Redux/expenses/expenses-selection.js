// import { createSelector } from 'reselect';

const getExpenses = state => state.expenses.items;

const getLoading = state => state.expenses.loading;

const getTotal = state => {
  const expenses = getExpenses(state);

  return expenses.reduce((acc, item) => {
    return item.type === '-' ? acc - item.sum : acc + item.sum
  }, 0);
}

// const getVisibleExpenses = createSelector([getExpenses], (expenses, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return expenses.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getLoading,
  // getVisibleExpenses,
  getExpenses,
  getTotal,
};
