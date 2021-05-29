import React from "react";

import "./cart-items.style.scss";

class CartItems extends React.Component {
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

export default CartItems;
