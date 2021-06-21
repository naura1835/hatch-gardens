import React from "react";

import Cactus from "../../images/stephanie-harvey-KdVn1rN4WRI-unsplash.jpg";
import "./product-images.style.scss";

const ProductImages = () => {
  return (
    <div className="wrapper">
      <img src={Cactus} className="img"></img>
      <div className="img-grp">
        <img src={Cactus} className="img-item"></img>
        <img src={Cactus} className="img-item"></img>
        <img src={Cactus} className="img-item"></img>
        <img src={Cactus} className="img-item"></img>
      </div>
    </div>
  );
};

export default ProductImages;
