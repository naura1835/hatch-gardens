import React from "react";
import CustomButton from "../custom-buttom/custom-button.component";
import Treatment from "../treatment/treatment.component";

import "./details.style.scss";

const Details = () => {
  return (
    <div className="details">
      <div className="price-name">
        <h3 className="price">$25.00</h3>
        <h1 className="plant-name">Pricklypear Cactus</h1>
      </div>
      <div className="description-wrapper">
        <span className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu
          sem, pretium sed ornare quis, bibendum a massa. Duis varius, tellus
          nec bibendum pulvinar, eros felis pharetra felis, venenatis facilisis
          leo risus quis felis. Maecenas eu semper felis. Integer sit amet
          pretium nisl.
        </span>
      </div>
      <div className="care-tip">
        <h3 className="treatment">Treatment</h3>
        <Treatment />
      </div>
      <CustomButton
        isGoogleSignIn
        style={{ width: "100%", alignSelf: "center" }}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

export default Details;
