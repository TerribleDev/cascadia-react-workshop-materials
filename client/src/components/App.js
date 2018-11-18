import React, { Component } from 'react';
import Header from './Header';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import CheckoutPage from '../pages/CheckoutPage';
import OrdersPage from '../pages/OrdersPage';
import ContactPage from '../pages/ContactPage';
import { Router } from '@reach/router';
import { HOME, CHECKOUT, DETAIL, ORDERS, CONTACT } from '../utils/constants';
import { CartProvider } from './Cart';

const App = () => (
  <div className="App">
    <Header />
    <div className="section">
      <Router>
        <HomePage path={HOME} />
        <CheckoutPage path={CHECKOUT} />
        <DetailPage path={`${DETAIL}/:productId`} />
        <OrdersPage path={ORDERS} />
        <ContactPage path={CONTACT} />
      </Router>
    </div>
  </div>
);

const ConnectedApp = () => (
  <CartProvider>
    <App />
  </CartProvider>
);

export default ConnectedApp;
