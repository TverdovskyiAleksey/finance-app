// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { expensesSelectors } from '../../Redux/expenses';
import styles from './Expenses.module.css';

const Expenses = () => {

  const expenses = useSelector(expensesSelectors.getExpenses);
  // const dispatch = useDispatch();
  let total = 0;
  // expenses.reduce((acc, item) => acc + item.sum, 0);

  // useEffect(() => dispatch(expensesOperations.fetchExpenses()), [dispatch]);

  return (
    <>
      <div className={styles.balance}>
        Ваш баланс
        <p className={styles.total}>
          <span className={styles.currency}>₴</span> {total}</p>
      </div>
      <table className={styles.table}>
        <tr className={styles.head}>
          <td className={styles.item}>Дата</td>
          <td className={styles.center}>Тип</td>
          <td className={styles.item}>Категория</td>
          <td className={styles.item}>Комментарий</td>
          <td className={styles.center}>Сумма</td>
          <td className={styles.center}>Баланс</td>
        </tr>
        {expenses.map(({ id, date, type, category, description, sum }) =>
        (
          <tr key={id} className={styles.row}>
            <td className={styles.item}>{date}</td>
            <td className={styles.center}>{type}</td>
            <td className={styles.item}>{category}</td>
            <td className={styles.item}>{description}</td>
            <td className={type === '-' ? styles.dec : styles.inc}>{sum}</td>
            <td className={styles.center}>{type === '-' ? total - sum : total + sum}</td>
          </tr>
        ))}
      </table>
    </>
  )
};

export default Expenses;
