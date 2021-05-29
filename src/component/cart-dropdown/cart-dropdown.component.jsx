import React from "react";
import CartItems from "../cart-items/cart-items.component";
import CustomButton from "../custom-buttom/custom-button.component";

import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  //   function closeDropdown() {}
  return (
    <div
      className="dropdown"
      //   style={{ display: isDropdown ? "flex" : "none" }}
    >
      <button>Close</button>
      <span>the flash was here too</span>
      <CartItems />
      <CustomButton style={{ justifySelf: "flex-end" }}>
        Proceed to Checkout
      </CustomButton>
    </div>
  );
};
export default CartDropdown;
