import React from 'react';

import styles from './DiagramTab.module.css';

import db from '../db.json'

const transactionsList = db.transactionsList
const categories = db.categories
const usersConsumption = categories.map(el => el.consumption)
const usersIncome = categories.map(el => el.income)


export default function DiagramTab() {  
  return (    
    <div className={styles.container} >
      <ul className={styles.list}>
        <li className={styles.nameElement} >Категория</li>
        <li  className={styles.nameElement}>Сумма</li>
      </ul>      

      <ul className={styles.listTransaction} >        
        {transactionsList.length > 0 ? (
          transactionsList.map(item => {            
            return (
              <li className={styles.transactionElement}  key={item.id}>
                <div className={styles.categoryColor}
                  style={{
                    backgroundColor: `${item.color}`                    
                  }}
                ></div>
                <div className={styles.category} >{item.value}</div>
                <div className={styles.sum}>{item.sum}</div>
              </li>
            );
          })
        ) : (
          <li className={styles.noOperations}>
            <div className={styles.category} >Нет ничего</div>
          </li>
        )}
      </ul>

      <ul className={styles.listCategories}>
        <li className={styles.listElement}>
          <div className={styles.textElement} >Расходы:</div>
          <div className={styles.consumptionElement}>
            {usersConsumption}
          </div>

        </li>
        <li className={styles.listElement}>
          <div className={styles.textElement} >Доходы:</div>
          <div className={styles.incomeElement}>
             {usersIncome}
          </div>
        </li>
      </ul>
    </div>
  );
}