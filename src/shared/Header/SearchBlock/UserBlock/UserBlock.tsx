import React from 'react';
import styles from './userblock.css';
import { Break} from "../../../Break";
import { EColors, Text } from "../../../Text";
import { EIcons, Icon } from "../../../Icons/Icon";
import { Link } from "react-router-dom";

interface IUserBlockProps {
  avatarSrc: string;
  username: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <Link className={styles.userBox} to={`/user/${username}`} >
      <div className={styles.userBox}>
        <div className={styles.avatarBox}>
          {avatarSrc
            ? <img className={styles.avatarImage} src={avatarSrc} alt='user avatar' />
            : <Icon name={EIcons.anon} size={50} />
          }
        </div>

        <div className={styles.username}>
          <Break size={12} />
          <Text size={20} color={EColors.white}>{username}</Text>
        </div>
      </div>
    </Link>
  );
}
