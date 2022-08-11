import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { productDetailsSelector } from "../../store/products/products.selector";
import { setProductName } from "../../store/products/products.actions";

import Details from "../../component/details/details.component";
import ProductImages from "../../component/product-images/product-images.component";

import {
  ProductWrapper,
  ImageGrid,
  DetailsWrapper,
} from "./product-detail.styles";

const Product = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const details = useSelector(productDetailsSelector);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(setProductName(itemId));
  }, []);
  return (
    <>
      {details && (
        <ProductWrapper>
          <ImageGrid>
            <ProductImages image={details.imageUrl} />
          </ImageGrid>
          <DetailsWrapper>
            <Details item={details} />
          </DetailsWrapper>
        </ProductWrapper>
      )}
    </>
  );
};

export default Product;
