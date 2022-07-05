import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

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
  const { name, price, imageUrl } = item;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(item);
  };

  return (
    <>
      <ItemWrapper>
        <ProductWrapper
        // onClick={() => history.push(`/products/${name}`)}
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
    </>
  );
};

export default CollectionItem;
