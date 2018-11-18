import React, { Component } from 'react';
import { priceInDollars } from '../utils';
import { DETAIL } from '../utils/constants';
import { CartConsumer } from '../components/Cart';
import { navigate, Link } from '@reach/router';
import posed from 'react-pose';
const Box = posed.div({
  active: {
    transform: 'scale(1.05)',
  },
  inactive: {
    transform: 'scale(1.0)',
  },
});
const ONE = 1;

class Product extends Component {
  constructor() {
    super();
    this.navigateTo = this.navigateTo.bind(this);
    this.state = { active: false };
  }
  navigateTo = () => {
    const productId = this.props.product.id;
    navigate(`${DETAIL}/${productId}`);
  };

  addToCart = e => {
    e.stopPropagation();
    const productId = this.props.product.id;
    this.props.updateQuantity({ productId, quantity: ONE });
  };
  handleOnMouseEnter = () => this.setState({ active: true });
  handleOnMouseLeave = () => this.setState({ active: false });
  render() {
    const { imageUrl, name, price, id } = this.props.product;

    return (
      <Box
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
        pose={this.state.active ? 'active' : 'inactive'}
        className="card"
        onClick={this.navigateTo}
      >
        <div className="card-image">
          <figure className="image is-5by3">
            <img src={imageUrl} alt={name} />
          </figure>
        </div>
        <div className="card-content" style={{ minHeight: 200 }}>
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{priceInDollars(price)}</p>
          </div>
          <br />
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
            <br />
          </div>
        </div>
        <footer className="card-footer">
          <Link to={id} className="card-footer-item">
            Details
          </Link>
          <span
            style={{ cursor: 'pointer', color: '#3273DC' }}
            className="card-footer-item"
            onClick={this.addToCart}
          >
            Add to cart
          </span>
        </footer>
      </Box>
    );
  }
}
const ConnectedProduct = ({ product }) => (
  <CartConsumer>
    {({ updateQuantity }) => (
      <Product product={product} updateQuantity={updateQuantity} />
    )}
  </CartConsumer>
);
export default ConnectedProduct;
