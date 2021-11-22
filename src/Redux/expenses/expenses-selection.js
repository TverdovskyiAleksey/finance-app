import { createSelector } from 'reselect';
import moment from 'moment';

const getExpenses = state => state.expenses.items;

const getLoading = state => state.expenses.loading;

const getFilterReducer = state => state.expenses.filterReducer;

const getTotal = state => {
  const expenses = getExpenses(state);

  return expenses.reduce((acc, item) => {
    return item.type === '-' ? acc - item.sum : acc + item.sum;
  }, 0);
};

const getVisibleExpenses = createSelector(
  [getExpenses, getFilterReducer],
  (items, filter) => {
    const m = `${filter} ,2021`;
    // const m = `${filter.month} ,${filter.year}`;
    const thisMonthStart = moment(m).startOf('month');
    const thisMonthEnd = moment(m).endOf('month');
    return items.filter(({ date }) => {
      // console.log(thisMonthStart);
      // console.log(thisMonthEnd);
      // console.log(moment(date));
      // console.log(
      //   moment(date).isBetween(thisMonthStart, thisMonthEnd, undefined, '[]'),
      // );
      return moment(date).isBetween(
        thisMonthStart,
        thisMonthEnd,
        undefined,
        '[]',
      );
    });
  },
);

const getVisibleTotal = state => {
  const expenses = getVisibleExpenses(state);

  return expenses.reduce((acc, item) => {
    return item.type === '-' ? acc - item.sum : acc + item.sum;
  }, 0);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getLoading,
  getVisibleExpenses,
  getExpenses,
  getTotal,
  getFilterReducer,
  getVisibleTotal,
};
