import React, {useState} from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

export default function Provider({children}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  children: propTypes.any,
}.isRequerid;
