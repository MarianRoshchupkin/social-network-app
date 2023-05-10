import React from 'react';
import styles from './searchblock.css';
import { UserBlock } from "./UserBlock";
import { useUser} from "../../../hooks/useUser";

export function SearchBlock() {
  const [user] = useUser();

  return (
    <div className={styles.searchBlock}>
      <UserBlock
        avatarSrc={user.avatar}
        username={user.username}
      />
    </div>
  );
}
