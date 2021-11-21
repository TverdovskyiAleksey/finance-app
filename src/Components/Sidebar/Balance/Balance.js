import { useSelector } from 'react-redux';
import { expensesSelectors } from '../../../redux/expenses';
import styles from './Balance.module.css';

const Balance = () => {
  const total = useSelector(expensesSelectors.getTotal);
  // const dispatch = useDispatch();

  // useEffect(() => dispatch(expensesOperations.fetchExpenses()), [dispatch]);

  return (
    <>
      <div className={styles.balance}>
        Ваш баланс
        <p className={styles.total}>
          <span className={styles.currency}>₴</span> {total.toFixed(2)}
        </p>
      </div>
    </>
  );
};

export default Balance;
