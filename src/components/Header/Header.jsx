import React from 'react';

import SearchBar from '../SearchBar/SearchBar';

import CartButton from '../CarButton/CartButton';

import styles from './Header.module.css';

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
