const Transaction = () => {
  return <div></div>;
};

export default Transaction;
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Transaction.module.css';
// import { contactsSelection, contactsOperations } from "redux/contacts";

import TypeSwitch from './TypeSwitch';
// import Selector from './Selector';
import DTPicker from './Datetime';
import moment from 'moment';
import expensesOperations from 'Redux/expenses/expenses-operations';
import { validate } from 'indicative/validator';

const useForm = () => {
  const [state, setState] = useState('');

  return [state, setState];
};

const Transaction = ({ closeModal }) => {
  const [isChecked, setIsChecked] = useState(false);

  const [date, setDate] = useState(() => moment()._d);

  const [category, setCategory] = useForm('category');
  const [amount, setAmount] = useForm('amount');
  const [comment, setComment] = useForm('comment');

  const type = isChecked ? 'income' : 'spending';
  const dispatch = useDispatch();

  const handleCheckboxChange = evt => {
    setIsChecked(evt.target.checked);
  };

  const handleChange = evt => {
    console.log(evt);
    const { name, value } = evt.target;
    switch (name) {
      case 'category':
        setCategory(value);
        break;

      case 'amount':
        setAmount(value);
        break;

      case 'comment':
        setComment(value);
        break;

      default:
        return;
    }
  };

  const validateForm = data => {
    const rules = {
      type: 'required',
      amount: 'required',
      date: 'required|date',
    };

    const messages = {
      required: field => `${field} is required`,
      'date.date': 'Use date format',
    };

    validate(data, rules, messages);
    // .then(console.log).catch(console.error);
  };

  const handleSubmit = evt => {
    const transaction = { type, category, amount, date, comment };
    evt.preventDefault();
    validateForm(transaction);
    dispatch(
      expensesOperations.addExpense({ type, category, amount, date, comment }),
    );
    closeModal();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Добавить транзакцию</h2>

        <TypeSwitch
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
        {/* <Selector /> */}

        {!isChecked && (
          <div>
            <label className={styles.label} htmlFor="select-category">
              Выберите категорию
            </label>
            <select
              className={styles.select}
              name="category"
              value={category}
              id="select-category"
              placeholder="Выберите категорию"
              onChange={handleChange}
            >
              <option value="Basic">Основной</option>
              <option value="Food">Еда</option>
              <option value="Car">Авто</option>
              <option value="Growth">Развитие</option>
              <option value="Children">Дети</option>
              <option value="House">Дом</option>
              <option value="Education">Образование</option>
              <option value="Rest">Остальные</option>
            </select>
          </div>
        )}
        <div className={styles.inputs_block}>
          <label className={styles.label} htmlFor="input-amount">
            amount{' '}
          </label>
          <input
            className={styles.input}
            type="text"
            name="amount"
            id="input-amount"
            placeholder="0.00"
            value={amount}
            pattern="(^[0-9]*[1-9]+[0-9]*[\.,][0-9]*$)|(^[0-9]*[\.,][0-9]*[1-9]+[0-9]*$)|(^[0-9]*[1-9]+[0-9]*$)"
            title="Сумма должна содержать целые или дробные числа"
            required
            onChange={handleChange}
          />
          <label className={styles.label} htmlFor="input-date">
            date
          </label>

          {/* <input
            className={styles.input}
            type="text"
            // type="date"
            name="date"
            id="input-date"
            value={date}
            required
            // onChange={handleChange}
          /> */}

          <DTPicker className={styles.input} onChange={setDate} value={date} />
        </div>
        <label className={styles.label} htmlFor="input-comment">
          comment{' '}
        </label>
        <input
          className={styles.comment}
          type="text"
          name="comment"
          id="input-comment"
          placeholder="Комментарий"
          value={comment}
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
