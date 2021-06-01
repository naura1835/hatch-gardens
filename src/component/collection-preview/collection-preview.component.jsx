import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.style.scss";

const CollectionPreview = function ({ items }) {
  return (
    <div className="collection-preview">
      {items
        .filter((item, idx) => idx < 6)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  );
};

export default CollectionPreview;
