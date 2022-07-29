import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart/cart.context";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import HamburgerMenu from "../hamburger-menu/hamburger-menu.component";

import {
  Wrapper,
  LogoWrapper,
  MenuWrapper,
  CartIconWrapper,
} from "./header.styles";

const menuData = [
  { name: "About", url: "/about" },
  { name: "Shop", url: "/shop" },
  { name: "Blog", url: "/blog" },
  { name: "FAQs", url: "/faqs" },
  { name: "Sign In", url: "/signin" },
];

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);

  useEffect(() => {
    menuActive && (document.body.style.overflow = "hidden");

    !menuActive && (document.body.style.overflow = "");
  }, [menuActive]);

  return (
    <Wrapper className={menuActive ? "active" : ""}>
      <LogoWrapper>
        <Link to="/">
          <Logo height="50px" width="50px" />
        </Link>
      </LogoWrapper>
      <HamburgerMenu
        className="menu"
        handleMenu={() => {
          setMenuActive(!menuActive);
        }}
      />
      <MenuWrapper className={menuActive ? "active" : ""}>
        {menuData.map(({ name, url }, index) => {
          if (name == "Sign In" && currentUser) {
            return (
              <span
                key={index}
                onClick={() => {
                  setMenuActive(false);
                  signOutUser();
                }}
              >
                Sign Out
              </span>
            );
          } else {
            return (
              <Link
                key={index}
                to={url}
                onClick={() => {
                  setMenuActive(false);
                }}
              >
                {name}
              </Link>
            );
          }
        })}
      </MenuWrapper>
      <CartIconWrapper>
        <CartIcon />
      </CartIconWrapper>
      {isOpen && <CartDropdown />}
    </Wrapper>
  );
};

export default Header;
