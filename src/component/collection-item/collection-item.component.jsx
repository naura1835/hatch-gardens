import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addItemToCart } from "../../store/cart/cart.reducer";

import {
  AddToCartBtn,
  ButtonWrapper,
  DetailsWrapper,
  Image,
  ImageWrapper,
  ItemWrapper,
  ProductName,
  ProductPrice,
  ProductWrapper,
} from "./collection-item.styles";
import { forwardRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const CollectionItem = forwardRef(({ item }, ref) => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;

  const addProductToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <ItemWrapper ref={ref}>
      <ProductWrapper
        onClick={() => {
          navigateTo(`/products/${name}`);
        }}
      >
        <ImageWrapper>
          <Image src={imageUrl[0]} className="image" alt="" />
        </ImageWrapper>
        <DetailsWrapper>
          <ProductName>{name}</ProductName>
          <ProductPrice>NGN {price}</ProductPrice>
        </DetailsWrapper>
      </ProductWrapper>
      <ButtonWrapper>
        <AddToCartBtn onClick={addProductToCart}>Add to cart</AddToCartBtn>
      </ButtonWrapper>
    </ItemWrapper>
  );
});

export default CollectionItem;
