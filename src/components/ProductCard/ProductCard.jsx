import React from 'react';
import propTypes from 'prop-types';

import formCurrency from '../../utils/formCurrency';

import styles from './ProductCard.module.css';

import {BiSolidCartAdd} from 'react-icons/bi';

export default function ProductCard({data}) {
  const {title, thumbnail, price} = data;

  return (
    <div className={styles.productCard}>
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className={styles.cardImg}
      />

      <div className={styles.cardInfos}>
        <span className={styles.cardPrice}>{formCurrency(price, 'BRL')}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>

      <button type="button" className={styles.buttonAddCart}>
        <BiSolidCartAdd />
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequerid;
