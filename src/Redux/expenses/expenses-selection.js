import { createSelector } from 'reselect';
import moment from 'moment';

const getExpenses = state => state.expenses.items.expenses;

const getLoading = state => state.expenses.loading;

const getFilterReducer = state => state.expenses.filterReducer;

const getTotal = state => {
  const expenses = getExpenses(state);

  return expenses.reduce((acc, item) => {
    return item.type === '-' ? acc - item.sum : acc + item.sum;
  }, 0);
};

const months = [
  { id: '01', name: 'Январь' },
  { id: '02', name: 'Февраль' },
  { id: '03', name: 'Март' },
  { id: '04', name: 'Апрель' },
  { id: '05', name: 'Май' },
  { id: '06', name: 'Июнь' },
  { id: '07', name: 'Июль' },
  { id: '08', name: 'Август' },
  { id: '09', name: 'Сентябрь' },
  { id: '10', name: 'Октябрь' },
  { id: '11', name: 'Ноябрь' },
  { id: '12', name: 'Декабрь' },
];

const getVisibleExpenses = createSelector(
  [getFilterReducer, getExpenses],
  (filter, items) => {
    const m = months.findIndex(month => month.name === filter) + 1;
    const thisMonthStart = moment(`${m}-01-2021`).startOf('month');
    const thisMonthEnd = moment(`${m}-01-2021`).endOf('month');
    if (filter) {
      return items.filter(({ date }) => {
        return moment(date).isBetween(
          thisMonthStart,
          thisMonthEnd,
          undefined,
          '[]',
        );
      });
    } else {
      return items;
    }
  },
);

// const getVisibleTotal = state => {
//   const expenses = getVisibleExpenses(state);

//   return expenses.reduce((acc, item) => {
//     return item.type === '-' ? acc - item.sum : acc + item.sum;
//   }, 0);
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getLoading,
  getVisibleExpenses,
  getExpenses,
  getTotal,
  getFilterReducer,
  // getVisibleTotal,
};
