import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Icon, InlineIcon } from "@iconify/react";
import bxCart from "@iconify/icons-bx/bx-cart";
import lineOutlined from "@iconify/icons-ant-design/line-outlined";

import "./cart-icon.style.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  selectCartItemsCount,
  selectCartHidden,
} from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, hidden, itemCount }) => {
  return (
    <div className="icon" onClick={toggleCartHidden}>
      {hidden ? (
        <div className="close-btn"></div>
      ) : (
        <>
          <Icon icon={bxCart} className="cart-icon" />
          <div className="circle">
            <span className="item-count">{itemCount}</span>
          </div>
        </>
      )}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  itemCount: selectCartItemsCount,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
