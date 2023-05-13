import React from 'react';
import styles from './authentication.css';
import { Login } from "./Login";
import { Signup } from "./Signup";

interface IUserProps {
  loginError?: string;
  signupError?: string;
  signupSuccess?: string;
}

interface IAuthenticationProps {
  user: IUserProps
}

export function Authentication({ user }: IAuthenticationProps) {
  return (
    <div className={styles.container}>
      {user.loginError && (
        <div className={styles.error}>
          <p className={`${styles.errorDesc} ${styles.errorRed}`}>
            {user.loginError}
          </p>
        </div>
      )}
      {user.signupError && (
        <div className={styles.error}>
          <p className={`${styles.errorDesc} ${styles.errorRed}`}>
            {user.signupError}
          </p>
        </div>
      )}
      {user.signupSuccess && (
        <div className={styles.error}>
          <p className={`${styles.errorDesc} ${styles.errorGreen}`}>
            {user.signupSuccess}
          </p>
        </div>
      )}

      <div className={styles.forms}>
        <Login />
        <Signup />
      </div>
    </div>
  );
}
