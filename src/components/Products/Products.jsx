import React, {useContext, useEffect} from 'react';
import AppContext from '../../context/AppContext';

import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading.jsx/Loading';

import api from '../../api/api';

import styles from './Products.module.css';

export default function Products() {
  const {products, setProducts, loading, setLoading} = useContext(AppContext);

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
