import React, { useContext } from "react";

import { ReactComponent as Trash } from "../../assets/codicon_trash.svg";
import { CartContext } from "../../contexts/cart.context";

import {
  ItemDetails,
  ItemImage,
  ItemImageWrapper,
  ItemName,
  ItemPrice,
  TotalItemPrice,
  Quantity,
  Wrapper,
  TotalAndDelete,
} from "./cart-item.styles";

const CartItem = ({ item }) => {
  const { clearItemFromCart } = useContext(CartContext);
  const { imageUrl, name, price, quantity } = item;

  return (
    <Wrapper>
      <ItemImageWrapper>
        <ItemImage src={imageUrl[0]} alt={`${name}`} />
        <Quantity>{quantity}</Quantity>
      </ItemImageWrapper>
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemPrice>NGN {price}</ItemPrice>
        <TotalAndDelete>
          <TotalItemPrice>Total: NGN{price * quantity}</TotalItemPrice>
          <Trash onClick={() => clearItemFromCart(item)} />
        </TotalAndDelete>
      </ItemDetails>
    </Wrapper>
  );
};
export default CartItem;
