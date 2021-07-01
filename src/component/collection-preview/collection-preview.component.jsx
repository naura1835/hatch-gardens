import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.style.scss";

const CollectionPreview = function ({ items, count }) {
  return (
    <div className="collection-preview">
      {Object.keys(items)
        .map((key) => items[key])
        .filter((item, idx) => idx < count)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  );
};

export default CollectionPreview;
