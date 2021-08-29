import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { gsap, Power3 } from "gsap";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

// import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.style.scss";
import HamburgerMenu from "../hamburger-menu/hamburger-menu.component";

const Header = ({ currentUser, hidden }) => {
  const [menuActive, setMenuActive] = useState(false);
  const menu = menuActive ? "active" : "";

  let menuItems = useRef(null);

  useEffect(() => {
    const firstMenuItem = menuItems.children[1];
    const secondMenuItem = firstMenuItem.nextSibling;
    const thirdMenuItem = secondMenuItem.nextSibling;
    const fourthMenuItem = thirdMenuItem.nextSibling;

    if (window.innerWidth <= 550) {
      if (menu) {
        gsap.to(
          [firstMenuItem, secondMenuItem, thirdMenuItem, fourthMenuItem],
          {
            x: 0,
            autoAlpha: 1,
            ease: Power3.easeOut,
            duration: 0.8,
            delay: 0.8,
            stagger: {
              amount: 0.2,
            },
          }
        );
      } else {
        gsap.to(
          [fourthMenuItem, thirdMenuItem, secondMenuItem, firstMenuItem],
          {
            x: -35,
            autoAlpha: 0,
            ease: Power3.easeOut,
            delay: 0.3,
            stagger: {
              amount: 0.1,
            },
          }
        );
      }
    }
  });

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        {/* <Logo className="logo" /> */}
        <h2 className="logo">Logo</h2>
      </Link>
      <HamburgerMenu
        className="menu"
        handleMenu={() => {
          setMenuActive(true);
        }}
      />

      <div
        className={`menu-items ${menu}`}
        ref={(el) => {
          menuItems = el;
        }}
      >
        <div className="menu-header">
          <h2 className="mobile-logo">Logo</h2>
          <div
            className="mobile-close-nav-btn"
            onClick={() => {
              setMenuActive(false);
            }}
          ></div>
        </div>
        <Link className="item" to="/about">
          About
        </Link>
        <Link className="item" to="/shop">
          Shop
        </Link>
        <Link className="item" to="/blog">
          Blog
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
      <div className="icon-group">
        <CartIcon />
      </div>
      <CartDropdown
        myStyle={
          hidden
            ? { transform: "translateX(0)" }
            : { transform: "translateX(100%)" }
        }
      />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
