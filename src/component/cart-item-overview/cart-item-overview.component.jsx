import React from "react";

import { Wrapper, PlantName, PlantPrice } from "./cart-item-overview.styles";

const CartItemOverview = ({ item }) => {
  const { name, quantity, price } = item;
  return (
    <Wrapper>
      <PlantName>
        {name} x {quantity}
      </PlantName>
      <PlantPrice>NGN {price}</PlantPrice>
    </Wrapper>
  );
};

export default CartItemOverview;
