import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setIsOpen } from "../../store/cart/cart.reducer";
import {
  cartItemsSelector,
  cartSubtotalSelector,
  isCartOpenSelector,
} from "../../store/cart/cart.selector";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-buttom/custom-button.component";

import {
  Wrapper,
  OverlayWrapper,
  CartItemsWrapper,
  EmptyCart,
  Content,
  Title,
  SubTitle,
  Logo,
  SubTotalWrapper,
  ContinueButton,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(isCartOpenSelector);
  const cartItems = useSelector(cartItemsSelector);
  const cartSubtotal = useSelector(cartSubtotalSelector);

  const navigate = useNavigate();

  return (
    <>
      <OverlayWrapper onClick={() => dispatch(setIsOpen(!isOpen))} />
      <Wrapper active={isOpen}>
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
              <SubTitle>NGN {cartSubtotal}</SubTitle>
            </SubTotalWrapper>
            <CustomButton
              onClick={() => {
                dispatch(setIsOpen(!isOpen));
                navigate("/checkout");
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
                setIsOpen(!isOpen);
                navigate("/shop");
              }}
            >
              Go back to Shop
            </ContinueButton>
          </EmptyCart>
        )}
      </Wrapper>
    </>
  );
};
// const mapStateToProps = createStructuredSelector({
//   subtotal: selectCartSubtotal,
// });
export default CartDropdown;
