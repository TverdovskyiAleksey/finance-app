import Expenses from "../Components/Expenses";
import { ReactComponent as AddIcon } from '../Images/Icons/add-btn.svg';
import styles from '../Components/Expenses/Expenses.module.css';

const HomeView = () => (
  <div>
    <h1>Welcome home</h1>
    <Expenses />
    <button className={styles.button} aria-label="add expenses">
      <AddIcon width="44" height="44" />
    </button>
  </div>
);

export default HomeView;
