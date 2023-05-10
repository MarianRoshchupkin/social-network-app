import React from 'react';
import styles from './signup.css';

export function Signup() {
  return (
    <div className={styles.signup}>
      <h2 className={styles.title}>Регистрация</h2>
      <form className={styles.form} method="post" action="/signup" encType="application/x-www-form-urlencoded">
        <input className={styles.input} type="text" name="username" placeholder="Логин" />
        <input className={styles.input} type="password" name="password" placeholder="Пароль" />
        <button className={styles.button}>Зарегестрироваться</button>
      </form>
    </div>
  );
}
