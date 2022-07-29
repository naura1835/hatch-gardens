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
  const params = useParams();
  const products = useContext(ProductsContext);

  console.log(products);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* {products.map((product) =>
        Object.keys(product.items)
          .map((key) => product.items[key])
          .filter((item) => item.name === params.id)
          .map((item) => {
            return (
              <ProductWrapper key={item.id}>
                <ImageGrid>
                  <ProductImages image={item.imageUrl} />
                </ImageGrid>
                <DetailsWrapper>
                  <Details item={item} />
                </DetailsWrapper>
              </ProductWrapper>
            );
          })
      )} */}
    </>
  );
};

export default Product;
