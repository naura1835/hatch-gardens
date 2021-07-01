import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../component/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.style.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="collection-title">{title}</h2>
      <div className="items">
        {Object.keys(items)
          .map((key) => items[key])
          .map((item) => (
            <CollectionItem
              key={item.id}
              item={item}
              className="collection-item"
            />
          ))}
        {/* ((item) => ( */}
        {/* //if all of a sudden your code start doing nonsense remove Object.keys(items)
          .map((key) => items[key]) and replace with just items and also do that in collections previw component
           and in your store data change the items Object of each category into an array */}
        {/* )) */}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
