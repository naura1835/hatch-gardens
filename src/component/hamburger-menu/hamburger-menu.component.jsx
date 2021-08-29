import React from "react";

import { Hamburger, Line } from "./hamburger-menu.styles";

const HamburgerMenu = ({ handleMenu }) => {
  return (
    <Hamburger onClick={handleMenu}>
      <Line />
      <Line />
      <Line />
    </Hamburger>
  );
};

export default HamburgerMenu;
