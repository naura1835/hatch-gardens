import React from "react";
import { Outlet } from "react-router-dom";

import HeaderComponent from "../component/header/header.component";
import Footer from "../component/footer/footer.component";

import { LayoutWrapper } from "./layout.styles";

const Layout = () => {
  return (
    <LayoutWrapper>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
