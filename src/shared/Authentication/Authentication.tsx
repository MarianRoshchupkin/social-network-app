import React from 'react';
import styles from './authentication.css';
import { Login } from "./Login";
import { Signup } from "./Signup";

export function Authentication() {
  return (
    <div className={styles.container}>
      <div className={styles.forms}>
        <Login />
        <Signup />
      </div>
    </div>
  );
}
