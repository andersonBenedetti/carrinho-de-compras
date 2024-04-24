import React from 'react';

import SearchBar from '../SearchBar/SearchBar';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <SearchBar />
        <button>cart</button>
      </div>
    </header>
  );
}
