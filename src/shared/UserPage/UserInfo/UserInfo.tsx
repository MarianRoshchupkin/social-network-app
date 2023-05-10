import React from 'react';
import styles from './userinfo.css';

interface IUserInfoProps {
  age?: number;
  university?: string;
  city?: string;
}

export function UserInfo({ age, university, city }: IUserInfoProps) {
  return (
    <div className={styles.userInfo}>
      {age || university || city ? (
        <ul className={styles.userInfoList}>
          <li className={styles.userInfoItem}>Город: {city}</li>
          <li className={styles.userInfoItem}>ВУЗ: {university}</li>
          <li className={styles.userInfoItem}>Возраст: {age} лет</li>
        </ul>
      ) : (
        <p className={styles.userInfoDesc}>Личная информация отсутствует</p>
      )}
    </div>
  );
}
