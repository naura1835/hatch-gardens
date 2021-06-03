import React from "react";

import "./cart-item.style.scss";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={`${name} picture`} />
      <div className="item-details">
        <div className="item-header">
          <span className="item-name">{name}</span>
          <span className="total-price">${price * quantity}.00</span>
        </div>
        <span className="price">${price}.00</span>
        <span className="quantity">{`Qty: ${quantity}`}</span>
        <div className="remove-item">
          <button className="remove-item-btn">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
