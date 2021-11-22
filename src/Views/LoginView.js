import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { authOperations } from '../Redux/auth';
import { Link } from 'react-router-dom';
import styles from '../Components/Auth/Auth.module.css';

import logimg from '../Components/Auth/images/login-img.png';
import logo from '../Components/Auth/images/logo.png';
import pas from '../Components/Auth/images/lock.svg';
import mail from '../Components/Auth/images/email.svg';

export default function LoginView() {
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    password: yup
      .string()
      .matches(/[0-9a-zA-Z!@#$%^&*]/, 'Недопустимые символы для пароля')
      .min(6, 'Пароль должен быть не менее 6 символов')
      .max(12, 'Максимальная длина пароля 12 символов')
      .typeError('Должно быть строкой')
      .required('Обязательноe поле'),

    email: yup
      .string()
      .email('Введите корректный email')
      .required('Обязательноe поле'),
  });
  return (
    <div className={styles.register}>
      <div className={styles.regLeft}>
        <img className={styles.logimg} src={logimg} alt={'logimg'}></img>
        <p className={styles.regTitle}>Finance App</p>
      </div>
      <div className={styles.regRight}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validateOnBlur
          onSubmit={({ email, password }, { resetForm }) => {
            dispatch(authOperations.logIn({ email, password }));
            resetForm();
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <div className={styles.registerForm}>
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div className={styles.logo}>
                  <img className={styles.logoImg} src={logo} alt="logo" />
                  <p className={styles.title}>Wallet</p>
                </div>

                <div>
                  <input
                    className={styles.input}
                    style={{ backgroundImage: 'url(' + mail + ')' }}
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="E-mail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <p className={styles.error}>{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    className={styles.input}
                    style={{ backgroundImage: 'url(' + pas + ')' }}
                    type="password"
                    name="password"
                    value={values.password}
                    placeholder="Пароль"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password && (
                    <p className={styles.error}>{errors.password}</p>
                  )}
                </div>

                <div className={styles.btn}>
                  <button className={styles.btnReg} type="submit">
                    Вход
                  </button>
                  <Link to="/register" className={styles.button}>
                    Регистрация
                  </Link>
                </div>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
// name(pin):"test_email"
// email(pin):"test_email@gmail.com"
// password(pin):"password"
// rePassword(pin):"password"
