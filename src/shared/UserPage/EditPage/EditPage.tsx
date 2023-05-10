import React from 'react';
import styles from './editpage.css';
import { Avatar } from "../Avatar";
import { EditForm } from "./EditForm";
import { useUser } from "../../../hooks/useUser";

export function EditPage() {
  const [user] = useUser();

  return (
    <div className={styles.editPage}>
      <Avatar avatarSrc={user.avatar} username={user.username} size={240} />
      <EditForm />
    </div>
  );
}
