import React from "react";

import {
  Wrapper,
  PlantName,
  PlantPrice,
} from "./checkout-cart-overview.styles";

const CheckoutCartOverview = ({ item }) => {
  const { name, quantity, price } = item;
  return (
    <Wrapper>
      <PlantName>
        {name} x {quantity}
      </PlantName>
      <PlantPrice>NGN {price * quantity}</PlantPrice>
    </Wrapper>
  );
};

export default CheckoutCartOverview;
