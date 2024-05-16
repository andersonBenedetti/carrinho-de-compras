import React, {useContext, useState} from 'react';

import styles from './SearchBar.module.css';

import {IoSearch} from 'react-icons/io5';
import api from '../../api/api';
import AppContext from '../../context/AppContext';

export default function SearchBar() {
  const {setProducts, setLoading} = useContext(AppContext);

  const [searchValue, setSearchValue] = useState('');

  const handSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await api.get(searchValue);
    setProducts(products.data.results);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className={styles.searchBar} onSubmit={handSearch}>
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
