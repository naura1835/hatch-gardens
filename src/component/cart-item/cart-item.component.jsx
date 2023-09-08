import React from "react";
import { useDispatch } from "react-redux";

import { ReactComponent as Trash } from "../../assets/codicon_trash.svg";
import { clearItemFromCart } from "../../store/cart/cart.reducer";

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
  const { imageUrl, name, price, quantity } = item;
  const dispatch = useDispatch();

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
          <Trash onClick={() => dispatch(clearItemFromCart(item))} />
        </TotalAndDelete>
      </ItemDetails>
    </Wrapper>
  );
};
export default CartItem;
