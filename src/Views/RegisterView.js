import { useDispatch } from 'react-redux';
import { useState , useEffect } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { authOperations } from '../Redux/auth';
import { Link } from 'react-router-dom';
import styles from '../Components/Auth/Auth.module.css';

import regImg from '../Components/Auth/images/reg-img.png';
import logo from '../Components/Auth/images/logo.png';
import pas from '../Components/Auth/images/lock.svg';
import acc from '../Components/Auth/images/account_box.svg';
import mail from '../Components/Auth/images/email.svg';

import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


export default function RegisterView() {
  const dispatch = useDispatch();

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    top:10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#24CCA7' : '#308fe8',
  },
}));
  const validationSchema = yup.object().shape({
    name: yup.string().min(1, 'Введите ваше имя').max(12, 'Максимальная длина имени 12 символов').typeError('Должно быть строкой').required('Обязательно'),
    password:   yup.string().matches(
            /[0-9a-zA-Z!@#$%^&*]/,
            'Недопустимые символы для пароля'
    ).min(6, 'Пароль должен быть не менее 6 символов').max(12, 'Максимальная длина пароля 12 символов').typeError('Должно быть строкой').required('Обязательноe поле'),
    rePassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают'),
    email: yup.string().email('Введите корректный email').required('Обязательноe поле')
  })
  return (
    <div className={styles.register}>
      <div className={styles.regLeft}>
        <img className={styles.regImg} src={regImg} alt={'regImg'}></img>
        <p className={styles.regTitle}>Finance App</p>
      </div>
      <div className={styles.regRight}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            rePassword: ''
          }}
          validateOnBlur
          onSubmit={({ email, password, name }, { resetForm }) => {
                dispatch(authOperations.register({ email, password, name }))
                resetForm();
          }}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <div className={styles.registerForm}>
      
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
          <div className={styles.logo}>
            <img className={styles.logoImg} src={logo} alt='logo' />
             <p className={styles.title}>Wallet</p>
          </div>
       
            <div >
            <input
                className={styles.input}
                style={{backgroundImage: "url(" + mail + ")"}}
              type="email"
              name="email"
              value={values.email}
              placeholder='E-mail'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div>
            <input
                className={styles.input}
                 style={{backgroundImage: "url(" + pas + ")"}}
              type="password"
              name="password"
              value={values.password}
              placeholder='Пароль'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>
        <div>
              <input
                className={styles.input}
                style={{backgroundImage: "url(" + pas + ")"}}
              type="password"
              name="rePassword"
              value={values.rePassword}
              placeholder='Подтвердите пароль'
               onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.rePassword && errors.rePassword && <p className={styles.error}>{errors.rePassword}</p>}
            </div>
            <BorderLinearProgress variant="determinate" value={50} />
           <div>
            <input
                className={styles.input}
                style={{backgroundImage: "url(" + acc + ")"}}
              type="name"
              name="name"
              value={values.name}
              placeholder='Ваше имя'
               onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.name && errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
           
          <div className={styles.btn}>
  <button className={styles.btnReg} type="submit">
          Регистрация
        </button>
              <Link to="/login" className={styles.button}>Вход</Link>

          </div>
      </form>
     
    </div>
          )}

    </Formik>
      </div>
    
    </div>
  );
}
