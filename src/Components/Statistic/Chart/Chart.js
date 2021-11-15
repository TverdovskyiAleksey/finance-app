import React from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';
import styles from './Chart.module.css';

// временно
import db from '../db.json'

defaults.plugins.legend.display = false;
const hryvnaSign = '\u20B4';

export default function Chart() {
  const transactionsList = db.transactionsList  

const arrColors = transactionsList.map(el => el.color);
const arrMoney = transactionsList.map(el => el.sum);
const consumption = transactionsList.map(el => el.value);

        
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
            <span className={styles.balance}> {hryvnaSign}  24 000.00</span>
        </div>
      </div>
    </div>
  );
}