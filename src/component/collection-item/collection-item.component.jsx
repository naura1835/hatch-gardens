import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addItem } from "../../redux/cart/cart.actions";
import "./collection-item.style.scss";

const CollectionItem = ({ item, addItem, history, match }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="item-wrapper">
      <div
        className="collection-item"
        onClick={() => history.push(`${match.url}/products`)}
      >
        <div className="image-wrapper">
          <img src={imageUrl} className="image" alt="" />
          <div className="backdrop" />
        </div>

        <div className="details-wrapper">
          <span className="name">{name}</span>
          <span className="price">${price}.00</span>
        </div>
      </div>
      <div className="button-container">
        <button className="cart-btn" onClick={() => addItem(item)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
