import React from 'react';
import styles from './editprofilebutton.css';
import { Link } from "react-router-dom";

export function EditProfileButton() {
  return (
    <div>
      <Link className={styles.editProfileButton} to='/edit'>
        Редактировать профиль
      </Link>
    </div>
  );
}
