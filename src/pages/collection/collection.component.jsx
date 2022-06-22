import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import CollectionItem from "../../component/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.style.scss";

const CollectionPage = ({ collection }) => {
  const { items } = collection;
  const params = useParams();

  return (
    <div className="collection-page">
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
           and in your store data change the items Object of each category into an array. */}
        {/* )) */}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
