import React from 'react';
import { useSelector } from 'react-redux';
import { expensesSelectors } from '../../../Redux/expenses';
import Filter from '../../Filter';

import styles from './DiagramTab.module.css';

import db from '../db.json';
const transactionsList = db.transactionsList;

export default function DiagramTab() {
  // const expenses = useSelector(expensesSelectors.getExpenses);
  const expenses = useSelector(expensesSelectors.getVisibleExpenses);
  const consumption = expenses?.filter(expense => expense.type === '-');

  const consumption1 = consumption?.reduce((acc, item) => {
    const spending = acc.find(accItem => accItem?.category === item.category);
    spending
      ? (acc[acc.indexOf(spending)].sum += item.sum)
      : acc.push({ category: item.category, sum: item.sum });
    return acc;
  }, []);

  const income = expenses?.filter(expense => expense.type === '+');
  const colorConsumption = transactionsList.slice(0, consumption1?.length);

  const sumConsumption = consumption?.map(el => el.sum).reduce(add, 0);
  const sumIncome = income?.map(el => el.sum).reduce(add, 0);
  function add(accumulator, a) {
    return accumulator + a;
  }

  return (
    <div>
      <Filter />
      <ul className={styles.list}>
        <li className={styles.nameElement}>Категория</li>
        <li className={styles.nameElement}>Сумма</li>
      </ul>
      <div className={styles.containers}>
        <ul className={styles.listTransaction}>
          {colorConsumption?.map(item => {
            return (
              <li className={styles.transactionElements} key={item.id}>
                <div
                  className={styles.categoryColor}
                  style={{
                    backgroundColor: `${item.color}`,
                  }}
                ></div>
              </li>
            );
          })}
        </ul>

        <ul className={styles.listTransaction}>
          {consumption1?.length > 0 ? (
            consumption1?.map(item => {
              return (
                <li className={styles.transactionElement} key={item.id}>
                  <div className={styles.category}>{item.category}</div>
                  <div className={styles.sum}>{item.sum}</div>
                </li>
              );
            })
          ) : (
            <li className={styles.noOperations}>
              <div className={styles.category}>Нет ничего</div>
            </li>
          )}
        </ul>
      </div>

      <ul className={styles.listCategories}>
        <li className={styles.listElement}>
          <div className={styles.textElement}>Расходы:</div>
          <div className={styles.consumptionElement}>{sumConsumption}</div>
        </li>
        <li className={styles.listElement}>
          <div className={styles.textElement}>Доходы:</div>
          <div className={styles.incomeElement}>{sumIncome}</div>
        </li>
      </ul>
    </div>
  );
}
