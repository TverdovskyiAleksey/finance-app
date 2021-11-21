import Expenses from '../Components/Expenses';
import { ReactComponent as AddIcon } from '../Images/Icons/add-btn.svg';
import styles from '../Components/Expenses/Expenses.module.css';
import stylesHome from './Home.module.css';

import Transaction from '../Components/Transaction';
import Modal from '../Components/Modal';
import { useState } from 'react';
import Sidebar from '../Components/Sidebar';

const HomeView = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  return (
    <div className={stylesHome.Container}>
      {/* <h1>Welcome home</h1> */}
      <Sidebar />
      <div>
        <Expenses />
        <button
          className={styles.button}
          aria-label="add expenses"
          onClick={toggleModal}
        >
          <AddIcon width="44" height="44" />
        </button>
      </div>

      {showModal && (
        <Modal onClose={toggleModal}>
          <Transaction closeModal={toggleModal}></Transaction>
        </Modal>
      )}
    </div>
  );
};
export default HomeView;
