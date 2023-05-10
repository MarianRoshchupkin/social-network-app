import React from 'react';
import styles from './header.css';
import { NavBlock } from "./NavBlock";
import { SearchBlock } from "./SearchBlock";

export function Header() {
  return (
    <header className={styles.header}>
      <NavBlock />
      <SearchBlock />
    </header>
  );
}
