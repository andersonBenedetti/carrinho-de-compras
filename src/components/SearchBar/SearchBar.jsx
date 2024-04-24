import React from 'react';

import styles from './SearchBar.module.css';

import {IoSearch} from 'react-icons/io5';

export default function SearchBar() {
  return (
    <form className={styles.searchBar}>
      <input
        type="search"
        placeholder="Buscar produtos"
        className={styles.searchInput}
        required
      />

      <button type="submit" className={styles.searchButton}>
        <IoSearch />
      </button>
    </form>
  );
}
