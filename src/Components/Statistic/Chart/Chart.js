import React from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';
import styles from './Chart.module.css';
import { useSelector } from 'react-redux';
import { expensesSelectors } from '../../../Redux/expenses';

import db from '../db.json'

const hryvnaSign = '\u20B4';
defaults.plugins.legend.display = false;


 export default function Chart() {
   const transactionsList = db.transactionsList
   const arrColors = transactionsList.map(el => el.color)   
  const expenses = useSelector(expensesSelectors.getExpenses);
  const total = useSelector(expensesSelectors.getTotal);
  const consumption = expenses.filter(expense => expense.type === '-').map(el => el.category)
  const arrMoney = expenses.filter(expense => expense.type === '-').map(el => el.sum)
  
// рандом
//   const arrColors = expenses.map(el => {
//   return (
//     "rgb(" +
//     Math.floor(Math.random() * 256) +
//     "," +
//     Math.floor(Math.random() * 256) +
//     "," +
//     Math.floor(Math.random() * 256) +
//     ")"
//   );
// });

       
    return (
    <div className={styles.chart}>
      <p className={styles.title}>Статистика</p>
        <div className={styles.сhartСontainer}>  
        <div className={styles.doughnut}>
        <Doughnut
            data={{
                labels: consumption,
              datasets: [
                {
                  label: '# of Votes',
                  data: arrMoney,
                  backgroundColor: arrColors,
                  borderColor: arrColors,
                      borderWidth: 0,
                  maintainAspectRatio: false,
                  cutout:105,
                },
              ],
            }}
            options={{ maintainAspectRatio: false }}
            height={208}
              width={208}              
            />
            <span className={styles.balance}> {hryvnaSign}  {total}</span>
        </div>
      </div>
      </div>
       
  );
};
 

