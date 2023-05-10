import React from 'react';
import styles from './editform.css';

export function EditForm() {
  return (
    <form className={styles.editForm} method="post" action="/updateUserData" encType="application/x-www-form-urlencoded" >
      <input className={styles.editInput} type="text" name="city" placeholder="Город" />
      <input className={styles.editInput} type="text" name="university" placeholder="Университет" />
      <input className={styles.editInput} type="text" name="age" placeholder="Возраст(лет)" />
      <button className={styles.saveButton}>Сохранить</button>
    </form>
  );
}
