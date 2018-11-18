import React from 'react';
import Products from '../components/Products';
import { CartConsumer } from '../components/Cart';

const HomePage = ({ updateQuantity, updateRoute }) => {
  return (
    <div className="container">
      <Products updateRoute={updateRoute} updateQuantity={updateQuantity} />
    </div>
  );
};
const ConnectedHomePage = ({ updateRoute }) => (
  <CartConsumer>
    {({ updateQuantity }) => (
      <HomePage updateRoute={updateRoute} updateQuantity={updateQuantity} />
    )}
  </CartConsumer>
);
export default ConnectedHomePage;
