import React from "react";
import { connect } from "react-redux";

import Details from "../../component/details/details.component";
import ProductImages from "../../component/product-images/product-images.component";

import { selectProduct } from "../../redux/shop/shop.selectors";

import "./product-detail.style.scss";

const Product = ({ product }) => {
  // console.log(match.params);
  return (
    <div className="product-container">
      <div className="image-grid">
        {/* <p>{price}</p> */}
        {/* <h2>{price}</h2> */}
        <ProductImages />
      </div>
      <Details name={product} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  product: selectProduct(ownProps.match.params.itemId)(state),
});

export default connect(mapStateToProps)(Product);
