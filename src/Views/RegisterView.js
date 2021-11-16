import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { Formik } from 'formik';
// import * as yup from 'yup';
import { authOperations } from '../redux/auth';
import { Link } from 'react-router-dom';
import styles from '../Components/Auth/Auth.module.css';

import regImg from '../Components/Auth/images/reg-img.png';
import logo from '../Components/Auth/images/logo.png';
import pas from '../Components/Auth/images/lock.svg';
import acc from '../Components/Auth/images/account_box.svg';
import mail from '../Components/Auth/images/email.svg';



export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handelChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'rePassword':
        return setRePassword(value);
      default:
        return;
    }
  };
  const handelSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password, rePassword }));
    setName('');
    setEmail('');
    setPassword('');
    setRePassword('');
  };
  return (
    <div className={styles.register}>
      <div className={styles.regLeft}>
        <img className={styles.regImg} src={regImg} alt={'regImg'}></img>
        <p className={styles.regTitle}>Finance App</p>
      </div>
      <div className={styles.regRight}>
<div className={styles.registerForm}>
      
        <form className={styles.form} onSubmit={handelSubmit} autoComplete="off">
          <div className={styles.logo}>
            <img className={styles.logoImg} src={logo} alt='logo' />
             <h1 className={styles.title}>Wallet</h1>
          </div>
       
            <div >
            <input
                className={styles.input}
                style={{backgroundImage: "url(" + mail + ")"}}
              type="email"
              name="email"
              value={email}
              placeholder='E-mail'
              onChange={handelChange}
            />
        </div>
        <div>
            <input
                className={styles.input}
                 style={{backgroundImage: "url(" + pas + ")"}}
              type="password"
              name="password"
              value={password}
              placeholder='Пароль'
              onChange={handelChange}
            />
        </div>
        <div>
              <input
                className={styles.input}
                style={{backgroundImage: "url(" + pas + ")"}}
              type="password"
              name="rePassword"
              value={rePassword}
              placeholder='Подтвердите пароль'
              onChange={handelChange}
            />
          </div>
           <div>
            <input
                className={styles.input}
                style={{backgroundImage: "url(" + acc + ")"}}
              type="name"
              name="name"
              value={name}
              placeholder='Ваше имя'
              onChange={handelChange}
            />
          </div>
           
          <div className={styles.btn}>
  <button className={styles.btnReg} type="submit">
          Регистрация
        </button>
        {/* <button className={styles.button} type="button">
          Вход
        </button> */}
              <Link to="/login" className={styles.button}>Вход</Link>

          </div>
      </form>
     
    </div>
      </div>
    
    </div>
  );
}
