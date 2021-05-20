import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.style.scss";

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

export default Header;
