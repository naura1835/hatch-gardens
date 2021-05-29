import React from "react";
import CartItems from "../cart-items/cart-items.component";

import "./collection-item.style.scss";

const CollectionItem = function ({ id, name, price, imageUrl }) {
  return (
    <div className="collection-item">
      <img src={imageUrl} className="image" alt="" />
      <div className="details-wrapper">
        <div className="details">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <button className="cart-btn" onClick={() => new CartItems(name)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CollectionItem;
