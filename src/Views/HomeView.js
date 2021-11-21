import Expenses from '../Components/Expenses';
import { ReactComponent as AddIcon } from '../Images/Icons/add-btn.svg';
import styles from '../Components/Expenses/Expenses.module.css';

import Transaction from '../Components/Transaction';
import Modal from '../Components/Modal';
import { useState } from 'react';

const HomeView = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  return (
    <div>
      <h1>Welcome home</h1>
      <Expenses />
      <button
        className={styles.button}
        aria-label="add expenses"
        onClick={toggleModal}
      >
        <AddIcon width="44" height="44" />
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <Transaction closeModal={toggleModal}></Transaction>
        </Modal>
      )}
    </div>
  );
};
export default HomeView;
