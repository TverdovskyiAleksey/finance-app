import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Transaction.module.css';
import moment from 'moment';
import { validate } from 'indicative/validator';
import { ReactSVG } from 'react-svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TypeSwitch from './TypeSwitch';
import Selector from './Selector';
import DTPicker from './Datetime';
import { addExpense } from '../../redux/expenses/expenses-operations';

import DateIcon from './date_icon.svg';
import CloseModalIcon from './close.svg';

const useForm = () => {
  const [state, setState] = useState('');

  return [state, setState];
};

const Transaction = ({ closeModal }) => {
  const [isChecked, setIsChecked] = useState(false);

  const [date, setDate] = useState(() => moment()._d);

  const [category, setCategory] = useForm('category');
  const [sum, setSum] = useForm('sum');
  const [description, setDescription] = useForm('description');

  // const type = isChecked ? 'income' : 'spending';
  const type = isChecked ? '+' : '-';
  const isTablet = window.innerWidth > 767;
  const dispatch = useDispatch();

  const handleCheckboxChange = evt => {
    setIsChecked(evt.target.checked);
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'category':
        setCategory(value);
        break;

      case 'sum':
        setSum(value);
        break;

      case 'description':
        setDescription(value);
        break;

      default:
        return;
    }
  };

  const validateForm = data => {
    const rules = !isChecked
      ? {
          type: 'required',
          sum: 'required',
          date: 'required|date',
          category: 'required',
        }
      : {
          type: 'required',
          sum: 'required',
          date: 'required|date',
        };

    const messages = {
      required: field => `${field} is required`,
      'date.date': 'Use date format',
    };

    validate(data, rules, messages)
      .then(data => dispatch(addExpense(data)).then(closeModal))
      .catch(error => toast.warn(error[0].message));
  };

  const handleSubmit = evt => {
    const transaction = { type, category, sum, date, description };
    evt.preventDefault();
    validateForm(transaction);
  };

  return (
    <>
      <ToastContainer />
      {isTablet && (
        <button
          className={styles.button_close}
          type="button"
          onClick={closeModal}
        >
          <ReactSVG className={styles.closeIcon} src={CloseModalIcon} />
        </button>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Добавить транзакцию</h2>

        <TypeSwitch
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />

        {!isChecked && (
          <div className={styles.selectorContainer}>
            <label className={styles.label} htmlFor="select-category">
              Выберите категорию
            </label>
            <Selector
              id="select-category"
              name="select"
              onChange={setCategory}
              // value={category}
            />
          </div>
        )}
        <div className={styles.inputs_block}>
          <label className={styles.label} htmlFor="input-amount">
            amount{' '}
          </label>
          <input
            className={styles.input}
            type="text"
            name="sum"
            id="input-amount"
            placeholder="0.00"
            value={sum}
            pattern="(^[0-9]*[1-9]+[0-9]*[\.,][0-9]*$)|(^[0-9]*[\.,][0-9]*[1-9]+[0-9]*$)|(^[0-9]*[1-9]+[0-9]*$)"
            title="Сумма должна содержать целые или дробные числа"
            required
            onChange={handleChange}
          />

          <label className={styles.label} htmlFor="input-date">
            date
          </label>
          <DTPicker className={styles.input} onChange={setDate} value={date} />
          <ReactSVG className={styles.dateIcon} src={DateIcon} />
        </div>
        <label className={styles.label} htmlFor="input-comment">
          Comment
        </label>
        <input
          className={styles.comment}
          type="text"
          name="comment"
          id="input-comment"
          placeholder="Комментарий"
          value={description}
          onChange={handleChange}
        />
        <button className={styles.button_submit} type="submit">
          Добавить
        </button>
        <button
          className={styles.button_cancel}
          type="button"
          onClick={closeModal}
        >
          Отмена
        </button>
      </form>
    </>
  );
};

export default Transaction;
