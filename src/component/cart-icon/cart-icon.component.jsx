import { Icon } from "@iconify/react";
import bxCart from "@iconify/icons-bx/bx-cart";
import { useDispatch, useSelector } from "react-redux";

import { setIsOpen } from "../../store/cart/cart.reducer";
import {
  cartCountSelector,
  isCartOpenSelector,
} from "../../store/cart/cart.selector";

import { Circle, CloseBtn, ItemCount, Wrapper } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(isCartOpenSelector);
  const itemsCount = useSelector(cartCountSelector);

  return (
    <Wrapper onClick={() => dispatch(setIsOpen(!isOpen))}>
      {isOpen ? (
        <CloseBtn></CloseBtn>
      ) : (
        <>
          <Icon icon={bxCart} className="cart-icon" />
          <Circle>
            <ItemCount>{itemsCount}</ItemCount>
          </Circle>
        </>
      )}
    </Wrapper>
  );
};

export default CartIcon;
