import React from 'react';
import styles from './userpage.css';
import { Avatar } from "./Avatar";
import { EditProfileButton } from "./EditProfileButton";
import { useUser } from "../../hooks/useUser";
import { UserInfo } from "./UserInfo";

export function UserPage() {
  const [user] = useUser();

  return (
    <div className={styles.profile}>
      <Avatar avatarSrc={user.avatar} username={user.username} size={240} />
      <UserInfo age={user.age} university={user.university} city={user.city} />
      <EditProfileButton />
    </div>
  );
}
