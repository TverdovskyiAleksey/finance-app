import Transaction from '../Components/Transaction';
import Modal from '../Components/Modal';
import { useState } from 'react';

const HomeView = () => {
  const [showModal, setShowModal] = useState(true);
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  <div>
    <h1>Welcome home</h1>
    {showModal && (
      <Modal onClose={toggleModal}>
        <Transaction closeModal={toggleModal}></Transaction>
      </Modal>
    )}
  </div>;
};

export default HomeView;
