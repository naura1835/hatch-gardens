import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-buttom/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart-dropdown.style.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="container">
      <div className="dropdown">
        {/*  */}
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>OOooops...!Looks like you dont have anything</h2>
            <a>Go back to Shop</a>
            <ShoppingCart />
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))}
            </div>
            <CustomButton style={{ justifySelf: "flex-end" }}>
              Proceed to Checkout
            </CustomButton>
          </>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
