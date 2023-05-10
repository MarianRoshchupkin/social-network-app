import React from 'react';
import styles from './navblock.css';
import { useUser } from "../../../hooks/useUser";

export function NavBlock() {
  const [user] = useUser();

  return (
    <div className={styles.navBlock}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/posts">Главная</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href={`/user/${user.username}`}>Моя страница</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/logout">Выйти</a>
        </li>
      </ul>
    </div>
  );
}
