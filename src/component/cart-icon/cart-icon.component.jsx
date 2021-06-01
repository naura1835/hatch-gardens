import React from "react";
import { connect } from "react-redux";
import { Icon, InlineIcon } from "@iconify/react";
import bxCart from "@iconify/icons-bx/bx-cart";
import lineOutlined from "@iconify/icons-ant-design/line-outlined";

import "./cart-icon.style.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden, hidden }) => {
  return (
    <div className="icon" onClick={toggleCartHidden}>
      {hidden ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Icon icon={lineOutlined} className="cart-icon" />
          <span>Close</span>
        </div>
      ) : (
        <>
          <Icon icon={bxCart} className="cart-icon" />
          <div className="circle">
            <span className="item-count">0</span>
          </div>
        </>
      )}
    </div>
  );
};
const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
