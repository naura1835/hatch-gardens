import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import bxCart from "@iconify/icons-bx/bx-cart";

import "./cart-icon.style.scss";

const CartIcon = () => {
  return (
    <div className="icon">
      <Icon icon={bxCart} className="cart-icon" />
      <div className="circle">
        <span className="item-count">0</span>
      </div>
    </div>
  );
};

export default CartIcon;
