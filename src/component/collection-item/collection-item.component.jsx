import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addItemToCart } from "../../store/cart/cart.actions";
import { cartItemsSelector } from "../../store/cart/cart.selector";

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

gsap.registerPlugin(ScrollTrigger);

const CollectionItem = ({ item }) => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);
  const { name, price, imageUrl } = item;
  let itemRef = useRef(null);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, item));
  };
  // useEffect(() => {
  //   gsap.from(itemRef, {
  //     scrollTrigger: {
  //       trigger: itemRef,
  //     },
  //     duration: 0.8,
  //     // ease: Power4.easeInOut,
  //     delay: 0.2,
  //     y: 25,
  //     autoAlpha: 0,
  //   });
  // });
  //the animation should be fixed tomorrow

  return (
    <ItemWrapper
      ref={(el) => {
        itemRef = el;
      }}
    >
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
};

export default CollectionItem;
