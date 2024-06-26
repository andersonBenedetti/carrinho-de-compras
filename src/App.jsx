import React from 'react';
import Provider from './context/Provider';

import Header from './components/Header/Header';
import Products from './components/Products/Products';

export default function App() {
  return (
    <Provider>
      <Header />
      <Products />
    </Provider>
  );
}
