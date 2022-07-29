import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import bxCart from "@iconify/icons-bx/bx-cart";

import { CartContext } from "../../contexts/cart/cart.context";

import { Circle, CloseBtn, ItemCount, Wrapper } from "./cart-icon.styles";

const CartIcon = () => {
  const { isOpen, showCart, itemsCount } = useContext(CartContext);
  return (
    <Wrapper onClick={() => showCart(!isOpen)}>
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
