import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import { CollectionWrapper } from "./collection-preview.styles";

const CollectionPreview = function ({ items, count }) {
  return (
    <CollectionWrapper>
      {Object.keys(items)
        .map((key) => items[key])
        .filter((item, idx) => idx < count)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionWrapper>
  );
};

export default CollectionPreview;
