import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-buttom/custom-button.component";
import Treatment from "../treatment/treatment.component";

import { addItem } from "../../redux/cart/cart.actions";

import {
  DetailsWrapper,
  PriceNameRow,
  SubTitle,
  Title,
  DescriptionWrapper,
  Description,
  CareTipWrapper,
} from "./details.styles";

const Details = ({ item, addItem }) => {
  const { name, price, description, treatment } = item;

  return (
    <DetailsWrapper>
      <PriceNameRow>
        <SubTitle>${price}.00</SubTitle>
        <Title>{name}</Title>
      </PriceNameRow>
      <DescriptionWrapper>
        <Description>{description}</Description>
      </DescriptionWrapper>
      <CareTipWrapper>
        <SubTitle>Plant Care</SubTitle>
        <Treatment treatment={treatment} />
      </CareTipWrapper>
      <CustomButton
        isGoogleSignIn
        style={
          window.innerWidth <= 478
            ? { width: "100%", alignSelf: "center" }
            : { width: "300px" }
        }
        onClick={() => addItem(item)}
      >
        Add to cart
      </CustomButton>
    </DetailsWrapper>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Details);
