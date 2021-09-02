import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-buttom/custom-button.component";
import {
  selectCartHidden,
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

const CartDropdown = ({
  cartItems,
  hidden,
  history,
  toggleCartHidden,
  subtotal,
  myStyle,
}) => {
  const overlay = hidden ? "overlayActive" : "";
  return (
    <DropdownWrapper className={`${overlay}`}>
      <Dropdown style={myStyle}>
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
  hidden: selectCartHidden,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
