import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  handleClick = () => {
    // runs addToOrder with the index that was passed in
    this.props.addToOrder(this.props.index);
  };

  render() {
    // boom, destructuring!!!
    const { name, image, desc, price, status } = this.props.details;
    const isAvailable = status === 'available';

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button onClick={this.handleClick} disabled={!isAvailable}>
          {isAvailable ? 'add to order' : 'sold out'}
        </button>
      </li>
    );
  }
}

export default Fish;
