import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../redux/cart/cart.actions";
import "./cart-item.style.scss";

const CartItem = ({ item, clearItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl[0]} alt={`${name} picture`} />
      <div className="item-details">
        <div className="item-header">
          <span className="item-name">{name}</span>
          <span className="total-price">NGN {price * quantity}</span>
        </div>
        <span className="price">NGN {price}</span>
        <div className="item-header">
          <>
            {/* <button className="increment">+</button> */}
            <span className="quantity">{`Qty: ${quantity}`}</span>
          </>
          <div className="remove-item">
            <button className="remove-item-btn" onClick={() => clearItem(item)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});
export default connect(null, mapDispatchToProps)(CartItem);
