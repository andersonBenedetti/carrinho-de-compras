import React from 'react';

import styles from './CartButton.module.css';

import {IoIosCart} from 'react-icons/io';

export default function CartButton() {
  return (
    <button type="button" className={styles.cartButton}>
      <IoIosCart />
      <span className={styles.cartStatus}>1</span>
    </button>
  );
}
