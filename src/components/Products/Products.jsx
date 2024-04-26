import React, {useEffect, useState} from 'react';

import api from '../../api/api';

import styles from './Products.module.css';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get('iphone')
      .then((res) => {
        setProducts(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return <section className={`container ${styles.products}`}></section>;
}
