import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchExpenses } from '../../Redux/expenses/expenses-operations';
import { expensesSelectors, updateFilterAction } from '../../Redux/expenses';
import { useSelector } from 'react-redux';
// import styles from './Modal.module.css';

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
  const onChange = e => dispatch(updateFilterAction(e.target.value));
  return (
    <div>
      <select name="month" value={value} onChange={onChange}>
        {months.map(option => (
          <option key={option.id} value={option.name}>
            {option.name}
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
