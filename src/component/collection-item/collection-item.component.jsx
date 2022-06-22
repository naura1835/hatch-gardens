import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { gsap, Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { addItem } from "../../redux/cart/cart.actions";
import "./collection-item.style.scss";

gsap.registerPlugin(ScrollTrigger);

const CollectionItem = ({ item, addItem }) => {
  //, history
  const { name, price, imageUrl } = item;

  let itemRef = useRef(null);

  useEffect(() => {
    gsap.from(itemRef, {
      scrollTrigger: {
        trigger: itemRef,
      },
      duration: 0.8,
      ease: Power4.easeOut,
      delay: 0.2,
      y: 25,
      autoAlpha: 0,
    });
  });

  return (
    <div
      className="item-wrapper"
      ref={(el) => {
        itemRef = el;
      }}
    >
      <div
        className="collection-item"
        // onClick={() => history.push(`/products/${name}`)}
      >
        <div className="image-wrapper">
          <img src={imageUrl[0]} className="image" alt="" />
          <div className="backdrop" />
        </div>

        <div className="details-wrapper">
          <span className="name">{name}</span>
          <span className="price">NGN {price}</span>
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

export default connect(null, mapDispatchToProps)(CollectionItem); //withRouter(
