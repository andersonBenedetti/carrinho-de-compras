import React from 'react';

import SearchBar from '../SearchBar/SearchBar';

import styles from './Header.module.css';
import CartButton from '../CarButton/CartButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
}
