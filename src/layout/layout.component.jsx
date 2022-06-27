import React from "react";
import { Outlet } from "react-router-dom";

import HeaderComponent from "../component/header/header.component";
import Footer from "../component/footer/footer.component";

const Layout = () => {
  <>
    <HeaderComponent />
    <Outlet />
    <Footer />
  </>;
};

export default Layout;
