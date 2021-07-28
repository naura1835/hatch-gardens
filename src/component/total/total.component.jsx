import React from "react";

import { TotalWrapper, Title, TotalPrice } from "./total.styles";

const Total = ({ title, total }) => {
  return (
    <TotalWrapper>
      <Title>{title}</Title>
      <TotalPrice>NGN {total}</TotalPrice>
    </TotalWrapper>
  );
};

export default Total;
