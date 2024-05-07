import React, {useEffect, useState} from 'react';

import ProductCard from '../ProductCard/ProductCard';

import api from '../../api/api';

import styles from './Products.module.css';
import Loading from '../Loading.jsx/Loading';

export default function Products() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('iphone')
      .then((res) => {
        setProducts(res.data.results);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    (loading && <Loading />) || (
      <section className="container">
        <div className={styles.products}>
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </section>
    )
  );
}
