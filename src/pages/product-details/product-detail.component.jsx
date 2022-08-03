import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ProductsContext } from "../../contexts/products.context";

import Details from "../../component/details/details.component";
import ProductImages from "../../component/product-images/product-images.component";

import {
  ProductWrapper,
  ImageGrid,
  DetailsWrapper,
} from "./product-detail.styles";

const Product = () => {
  const { itemId } = useParams();
  const { getDetails, productDetails } = useContext(ProductsContext);

  useEffect(() => {
    getDetails(itemId);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductWrapper key={productDetails.id}>
        <ImageGrid>
          <ProductImages image={productDetails.imageUrl} />
        </ImageGrid>
        <DetailsWrapper>
          <Details item={productDetails} />
        </DetailsWrapper>
      </ProductWrapper>
    </>
  );
};

export default Product;
