import React from "react";
import { Route } from "react-router-dom";

import Tabbar from "../../component/tabbar/tabbar.component";
import CollectionsOverview from "../../component/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import "./shop.style.scss";

const ShopPage = ({ match }) => {
  return (
    <div className="shop">
      <div className="tab-view">
        <Tabbar />
      </div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
