import React from "react";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";

import HeroWrapperSection from "../../component/hero-wrapper/hero-wrapper.component";
import Tabbar from "../../component/tabbar/tabbar.component";

import { selectContentDetails } from "../../redux/hero-content/hero-content.selectors";

import "./shop.style.scss";

const ShopPage = ({ content }) => {
  // { content, match, history}

  return (
    <div className="shop">
      <HeroWrapperSection {...content} />
      <>
        <Tabbar />
        <Outlet />
      </>
      {/* <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      /> */}
    </div>
  );
};

const mapStateToProps = (state, history) => ({
  content: selectContentDetails(history.pathname)(state),
});

export default connect(mapStateToProps)(ShopPage); //)
