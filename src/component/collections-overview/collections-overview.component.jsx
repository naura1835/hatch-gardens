import React, { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

import CollectionItem from "../collection-item/collection-item.component";

import { Wrapper } from "./collections-overview.styles";

const CollectionsOverview = () => {
  const collections = useContext(ProductsContext);
  const products = Object.keys(collections).map((key) => collections[key]); //turn the onject into an array

  const productsOverview = products.reduce((previous, { items }) => {
    const val = Object.keys(items)
      .map((key) => items[key])
      .filter((item, id) => id < 6);
    return previous.concat(val);
  }, []);

  return (
    <Wrapper title="plant collection">
      {productsOverview.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </Wrapper>
  );
};

export default CollectionsOverview;
