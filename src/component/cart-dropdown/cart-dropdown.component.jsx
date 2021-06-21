import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-buttom/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.style.scss";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className="dropdown-container">
      <div className="dropdown">
        {cartItems.length ? (
          <>
            <div className="cart-items">
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))}
            </div>
            <CustomButton
              style={{ justifySelf: "flex-end" }}
              onClick={() => {
                history.push(`/checkout`);
              }}
            >
              Proceed to Checkout
            </CustomButton>
          </>
        ) : (
          <div className="empty-cart">
            <h2>OOooops...!Looks like you dont have anything</h2>
            <a>Go back to Shop</a>
            <ShoppingCart />
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
