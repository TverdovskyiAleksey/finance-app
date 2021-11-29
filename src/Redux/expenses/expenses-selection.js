import { createSelector } from 'reselect';
import moment from 'moment';

const getExpenses = state => state.expenses.items.expenses;

const getLoading = state => state.expenses.loading;

const getFilterMonthReducer = state => state.expenses.filterMonthReducer;
const getFilterYearReducer = state => state.expenses.filterYearReducer;

const getTotal = state => {
  const expenses = getExpenses(state);

  return expenses?.reduce((acc, item) => {
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
  [getFilterMonthReducer, getFilterYearReducer, getExpenses],
  (filterMonth, filterYear, items) => {
    const m = months.findIndex(month => month.name === filterMonth) + 1;
    // console.log(m);
    // console.log(filter);
    const thisPeriodStart = filterMonth
      ? moment(`${m}-01-${filterYear}`).startOf('month')
      : moment(`01-01-${filterYear}`);
    const thisPeriodEnd = filterMonth
      ? moment(`${m}-01-${filterYear}`).endOf('month')
      : moment(`12-31-${filterYear}`);
    // console.log(thisMonthStart);
    if (filterYear) {
      return items.filter(({ date }) => {
        return moment(date).isBetween(
          thisPeriodStart,
          thisPeriodEnd,
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
  getFilterMonthReducer,
  getFilterYearReducer,
  // getVisibleTotal,
};
