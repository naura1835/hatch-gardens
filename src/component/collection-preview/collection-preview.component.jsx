import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.style.scss";

const CollectionPreview = function ({ items }) {
  return (
    <div className="collection-preview">
      {items
        .filter((item, idx) => idx < 6)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  );
};

export default CollectionPreview;
