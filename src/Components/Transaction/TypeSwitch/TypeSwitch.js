import styles from './TypeSwitch.module.css';
import SvgPlus from '../add.svg';
import SvgMinus from '../subtract1.svg';
import { ReactSVG } from 'react-svg';

// // import { contactsSelection, contactsOperations } from "redux/contacts";

const TypeSwitch = ({ isChecked, handleCheckboxChange }) => {
  const incomeClass = isChecked ? styles.incomeActive : styles.transactionType;
  const spendingClass = isChecked
    ? styles.transactionType
    : styles.spendingActive;
  const markerClass = isChecked ? styles.markerActive : styles.marker;

  return (
    <div className={styles.switch}>
      <span className={incomeClass}>Доход</span>

      <div className={styles.control}>
        <input
          className={styles.toggle}
          type="checkbox"
          checked={isChecked}
          name="type"
          id="type-switch-toggle" //динамический id
          aria-label="Переключить тип транзакции"
          onChange={handleCheckboxChange}
        />
        <label
          aria-hidden="true"
          className={styles.track}
          htmlFor="type-switch-toggle" //динамический id
        ></label>
        <div aria-hidden="true" className={markerClass}>
          {isChecked ? <ReactSVG src={SvgPlus} /> : <ReactSVG src={SvgMinus} />}
        </div>
      </div>

      <span className={spendingClass}>Расход</span>
    </div>
  );
};

export default TypeSwitch;
