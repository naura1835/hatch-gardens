import React from "react";

import Details from "../../component/details/details.component";
import ProductImages from "../../component/product-images/product-images.component";

import "./product-detail.style.scss";

const Product = () => {
  return (
    <div className="product-container">
      <div className="image-grid">
        <ProductImages />
      </div>
      <Details />
    </div>
  );
};
export default Product;
