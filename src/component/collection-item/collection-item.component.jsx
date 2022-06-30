import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import { gsap, Power4 } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

import { addItem } from "../../redux/cart/cart.actions";

import {
  AddToCartBtn,
  ButtonWrapper,
  DetailsWrapper,
  Image,
  ImageWrapper,
  ProductName,
  ProductPrice,
  ProductWrapper,
  Wrapper,
} from "./collection-item.styles";

// gsap.registerPlugin(ScrollTrigger);

const CollectionItem = ({ item, addItem }) => {
  //, history
  const { name, price, imageUrl } = item;

  // let itemRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(itemRef, {
  //     scrollTrigger: {
  //       trigger: itemRef,
  //     },
  //     duration: 0.8,
  //     ease: Power4.easeOut,
  //     delay: 0.2,
  //     y: 25,
  //     autoAlpha: 0,
  //   });
  // });
  // ref={(el) => {
  //   itemRef = el;
  // }}
  return (
    <Wrapper>
      <ProductWrapper
      // onClick={() => history.push(`/products/${name}`)}
      >
        <ImageWrapper>
          <Image src={imageUrl[0]} className="image" alt="" />
          {/* <div className="backdrop" /> */}
        </ImageWrapper>
        <DetailsWrapper>
          <ProductName>{name}</ProductName>
          <ProductPrice>NGN {price}</ProductPrice>
        </DetailsWrapper>
      </ProductWrapper>
      <ButtonWrapper>
        <AddToCartBtn onClick={() => addItem(item)}>Add to cart</AddToCartBtn>
      </ButtonWrapper>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem); //withRouter(
