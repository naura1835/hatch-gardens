import { Outlet } from "react-router-dom";

import Tabbar from "../../component/tabbar/tabbar.component";

import { Wrapper } from "./shop.styles";

const ShopPage = () => {
  return (
    <Wrapper>
      <>
        <Tabbar />
        <Outlet />
      </>
    </Wrapper>
  );
};

export default ShopPage;
