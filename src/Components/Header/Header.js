import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { authOperations, authSelectors } from '../../Redux/auth';
import logo from '../../Components/Auth/images/logo.png';
import styles from './Header.module.css';
import logout from './images/logout.svg';

import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '25px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 5, 5),
  },
}));

export default function Header() {
  const classes = useStyles();
  const [open, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src={logo} alt="logo" />
        <p className={styles.title}>Wallet</p>
      </div>

      <div className={styles.nav}>
        <p className={styles.name}>Name{name}</p>
        <button
          className={styles.btn}
          type="button"
          variant="success"
          onClick={toggleModal}
        >
          <img className={styles.logIcon} src={logout} alt="logout" />
          <span className={styles.btnTitle}>Выйти</span>
        </button>
      </div>

      <Modal
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={toggleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <p id="transition-modal-description" className={styles.modalTitle}>
              Вы уверены,что хотите выйти?
            </p>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#24cca7',
                marginRight: '30px',
                color: 'white',
              }}
              onClick={() => dispatch(authOperations.logOut())}
            >
              Да
            </Button>
            <Button variant="outlined" color="primary" onClick={toggleModal}>
              Нет
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
