import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductsContext } from "../../contexts/products.context";

import CollectionItem from "../../component/collection-item/collection-item.component";

import "./collection.style.scss";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collections = useContext(ProductsContext);

  const collection = collections[collectionId].items;
  const items = Object.keys(collection).map((key) => collection[key]);

  return (
    <div className="collection-page">
      <div className="items">
        {items.map((item, index) => (
          <CollectionItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
