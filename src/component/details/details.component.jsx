import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.actions";
import { cartItemsSelector } from "../../store/cart/cart.selector";

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

const Details = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);
  const { name, price, description, treatment } = item;

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, item));
  };

  return (
    <DetailsWrapper>
      <PriceNameRow>
        <SubTitle>NGN{price}.00</SubTitle>
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
        onClick={addProductToCart}
      >
        Add to cart
      </CustomButton>
    </DetailsWrapper>
  );
};

export default Details;
