import React from "react";
import CustomButton from "../custom-buttom/custom-button.component";
import Treatment from "../treatment/treatment.component";

import {
  DetailsWrapper,
  PriceNameRow,
  SubTitle,
  Title,
  DescriptionWrapper,
  Description,
  CareTipWrapper,
} from "./details.styles";

const Details = ({ name, price, treatment }) => {
  return (
    <DetailsWrapper>
      <PriceNameRow>
        <SubTitle>${price}.00</SubTitle>
        <Title>{name}</Title>
      </PriceNameRow>
      <DescriptionWrapper>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu
          sem, pretium sed ornare quis, bibendum a massa. Duis varius, tellus
          nec bibendum pulvinar, eros felis pharetra felis, venenatis facilisis
          leo risus quis felis. Maecenas eu semper felis. Integer sit amet
          pretium nisl.
        </Description>
      </DescriptionWrapper>
      <CareTipWrapper>
        <SubTitle>Treatment</SubTitle>
        <Treatment treatment={treatment} />
      </CareTipWrapper>
      <CustomButton isGoogleSignIn style={{ width: "300px" }}>
        Add to cart
      </CustomButton>
    </DetailsWrapper>
  );
};

export default Details;
