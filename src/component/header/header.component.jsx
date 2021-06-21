import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.style.scss";

const Header = ({ currentUser, hidden }) => {
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
        <div className="icon-group">
          <CartIcon />
        </div>
      </div>
      {hidden ? <CartDropdown /> : null}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
