import React from "react";
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
      {/* <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      /> */}
    </Wrapper>
  );
};

export default ShopPage;
