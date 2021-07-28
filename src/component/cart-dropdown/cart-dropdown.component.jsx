import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { PaystackButton } from "react-paystack";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-buttom/custom-button.component";
import {
  selectCartItems,
  selectCartSubtotal,
} from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
  DropdownWrapper,
  Dropdown,
  CartItemsWrapper,
  EmptyCart,
  Content,
  Title,
  SubTitle,
  Logo,
  SubTotalWrapper,
  ContinueButton,
} from "./cart-dropdown.styles";

const config = {
  reference: new Date().getTime(),
  email: "user@example.com",
  amount: 20000,
  publicKey: "pk_test_fd63cd4948fbf49a11f0164e16bd465eaa01b00a",
};

const CartDropdown = ({ cartItems, history, toggleCartHidden, subtotal }) => {
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    amount: subtotal * 100,
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <DropdownWrapper>
      <Dropdown>
        {cartItems.length ? (
          <>
            <CartItemsWrapper>
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))}
            </CartItemsWrapper>
            <SubTotalWrapper>
              <SubTitle style={{ textTransform: "uppercase" }}>
                SubTotal
              </SubTitle>
              <SubTitle>NGN {subtotal}</SubTitle>
            </SubTotalWrapper>

            {/* <PaystackButton className="paystack-button" {...componentProps} /> */}
            <CustomButton
              style={{ justifySelf: "flex-end" }}
              onClick={() => {
                history.push(`/checkout`);
                toggleCartHidden();
              }}
            >
              Proceed to Checkout
            </CustomButton>
          </>
        ) : (
          <EmptyCart>
            <Logo src="./assets/icons/tabler_plant.svg" />
            <Content>
              <Title>Oops looks like your bag is empty</Title>
              <SubTitle>Head back to continue shopping</SubTitle>
            </Content>
            <ContinueButton
              onClick={() => {
                history.push("/shop");
                toggleCartHidden();
              }}
            >
              Go back to Shop
            </ContinueButton>
          </EmptyCart>
        )}
      </Dropdown>
    </DropdownWrapper>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  subtotal: selectCartSubtotal,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
