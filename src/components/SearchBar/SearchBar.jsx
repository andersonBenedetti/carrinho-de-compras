import React, {useState} from 'react';

import styles from './SearchBar.module.css';

import {IoSearch} from 'react-icons/io5';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form className={styles.searchBar}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className={styles.searchInput}
        onChange={({target}) => setSearchValue(target.value)}
        required
      />

      <button type="submit" className={styles.searchButton}>
        <IoSearch />
      </button>
    </form>
  );
}
