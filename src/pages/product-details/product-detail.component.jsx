import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Details from "../../component/details/details.component";
import ProductImages from "../../component/product-images/product-images.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import { ProductWrapper, ImageGrid } from "./product-detail.styles";

const Product = ({ match, products }) => {
  return (
    <>
      {products.map((product) =>
        Object.keys(product.items)
          .map((key) => product.items[key])
          .filter((item) => item.name === match.params.itemId)
          .map(({ id, imageUrl, ...otherProps }) => (
            <ProductWrapper key={id}>
              <ImageGrid>
                <ProductImages image={imageUrl} />
              </ImageGrid>
              <Details {...otherProps} style={{ alignSelf: "end" }} />
            </ProductWrapper>
          ))
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(Product);
