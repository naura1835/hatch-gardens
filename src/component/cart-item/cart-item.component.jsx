import React from "react";

import "./cart-item.style.scss";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }
  render() {
    // [...cartItems, ]
    return (
      <div className="cart-items">
        <h3>{this.props.cartItems}</h3>
      </div>
    );
  }
}

export default CartItem;
