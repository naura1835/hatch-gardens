import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import HeroWrapperSection from "../../component/hero-wrapper/hero-wrapper.component";
import Tabbar from "../../component/tabbar/tabbar.component";
import CollectionsOverview from "../../component/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import { selectContentDetails } from "../../redux/hero-content/hero-content.selectors";

import "./shop.style.scss";

const ShopPage = ({ match, history, content }) => {
  return (
    <div className="shop">
      <HeroWrapperSection {...content} />
      <div className="tab-view">
        <Tabbar />
      </div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

const mapStateToProps = (state, history) => ({
  content: selectContentDetails(history.location.pathname)(state),
});

export default connect(mapStateToProps)(ShopPage);
