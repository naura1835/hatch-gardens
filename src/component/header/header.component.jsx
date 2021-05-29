import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { Icon, InlineIcon } from "@iconify/react";
// import accountIcon from "@iconify/icons-line-md/account";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.style.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser }) => {
  const [isDropdown, setIsDropdown] = useState(false);

  const handleDropdown = () => {
    if (!isDropdown) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="menu-items">
        <Link className="item" to="/shop">
          Shop
        </Link>
        <Link className="item" to="/contact-us">
          Contact Us
        </Link>
        <Link className="item" to="/faqs">
          FAQs
        </Link>
        {currentUser ? (
          <div className="item" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="item" to="/signin">
            Sign In
          </Link>
        )}
        {/* <Icon icon={accountIcon} /> */}
        <div className="icon-group" onClick={handleDropdown}>
          <CartIcon />
        </div>
      </div>
      {isDropdown ? <CartDropdown /> : null}
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
