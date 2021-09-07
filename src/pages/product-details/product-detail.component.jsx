import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Details from "../../component/details/details.component";
import ProductImages from "../../component/product-images/product-images.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import {
  ProductWrapper,
  ImageGrid,
  DetailsWrapper,
} from "./product-detail.styles";

const Product = ({ match, products }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {products.map((product) =>
        Object.keys(product.items)
          .map((key) => product.items[key])
          .filter((item) => item.name === match.params.itemId)
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
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(Product);
