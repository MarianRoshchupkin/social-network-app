import React from 'react';
import styles from './avatar.css';
import { EIcons, Icon } from "../../Icons/Icon";
import { Link } from "react-router-dom";

interface IAvatarProps {
  avatarSrc?: string;
  username: string;
  size: number
}

export function Avatar({ avatarSrc, username, size }: IAvatarProps) {
  return (
    <Link className={styles.avatar} to={`/user/${username}/modal`}>
      <div className={styles.avatar}>
        <div className={styles.userBox}>
          <div className={styles.avatarBox}>
            {avatarSrc
              ? <img className={styles.avatarImage} src={avatarSrc} alt='user avatar' />
              : <Icon name={EIcons.anon} size={size} />
            }
          </div>
        </div>
      </div>
    </Link>
  );
}
