import React from "react";

import CollectionPreview from "../../component/collection-preview/collection-preview.component";
import Tabbar from "../../component/tabbar/tabbar.component";

import shopData from "../../data/shopItems.js";

import "./shop.style.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: shopData,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop">
        <div className="tab-view">
          <Tabbar collections={collections} />
        </div>
        <div className="collection-wrapper">
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
        <h2>Berry Allen was here </h2>
      </div>
    );
  }
}

export default ShopPage;
