import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart/cart.context";

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

const CollectionItem = ({ item }) => {
  const navigateTo = useNavigate();
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl, id } = item;

  const addProductToCart = () => {
    addItemToCart(item);
  };

  return (
    <>
      <ItemWrapper>
        <ProductWrapper onClick={() => navigateTo(`/products/${id}`)}>
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
    </>
  );
};

export default CollectionItem;
