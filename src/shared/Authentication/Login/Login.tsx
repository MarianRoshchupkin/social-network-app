import React from 'react';
import styles from './login.css';

export function Login() {
  // const dispatch = useDispatch<ThunkDispatch<IInitialState, void, AnyAction>>();
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // console.log(username);
  // console.log(password);
  //
  // function handleSubmit() {
  //   dispatch(setUserAsync(username, password)())
  // }
  return (
    <div className={styles.login}>
      <h2 className={styles.title}>Вход</h2>
      <form className={styles.form} method="post" action="/login" encType="application/x-www-form-urlencoded">
        <input className={styles.input} type="text" name="username" placeholder="Логин" />
        <input className={styles.input} type="password" name="password" placeholder="Пароль" />
        <button className={styles.button}>Войти</button>
      </form>
    </div>
  );
}
