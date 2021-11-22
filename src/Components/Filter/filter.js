import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchExpenses } from '../../redux/expenses/expenses-operations';
import { expensesSelectors, updateFilterAction } from '../../redux/expenses';
import { useSelector } from 'react-redux';
// import styles from './Modal.module.css';

const months = [
  'February',
  'January',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// const years = ['2021', '2020', '2019'];

// const useSelect = () => {
//   const [state, setState] = useState('');
//   return [state, setState];
// };

const Filter = () => {
  // const [month, setMonth] = useSelect('month');
  // const [year, setYear] = useSelect('year');

  // const handleChange = evt => {
  //   const { name, value } = evt.target;
  //   switch (name) {
  //     case 'month':
  //       setMonth(value);
  //       break;

  //     case 'year':
  //       setYear(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  //   useEffect(() => {});
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchExpenses()), [dispatch]);
  const value = useSelector(expensesSelectors.getFilterReducer);
  //   const date = useSelector(expensesSelectors.getFilterReducer);
  // const valueMonth=date.month;
  // const valueYear=date.year;
  const onChange = e => dispatch(updateFilterAction(e.target.value));
  return (
    <div>
      <select name="month" value={value} onChange={onChange}>
        {months.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* <select name="year" value={year} onChange={handleChange}>
        {years.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select> */}
    </div>
  );
};
export default Filter;
