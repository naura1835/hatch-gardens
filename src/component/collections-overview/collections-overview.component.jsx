import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { productsMapSelector } from "../../store/products/products.selector";

import CollectionItem from "../collection-item/collection-item.component";

import { Wrapper } from "./collections-overview.styles";

const CollectionsOverview = () => {
  const products = useSelector(productsMapSelector);

  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const data = Object.keys(products).map((key) => products[key]); //turn the onject into an array

    const productsOverview = data.reduce((previous, { items }) => {
      const val = items.filter((_, id) => id < 6);
      return previous.concat(val);
    }, []);

    setCollection(productsOverview);
  }, [products]);

  return (
    <Wrapper title="plant collection">
      {collection.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </Wrapper>
  );
};

export default CollectionsOverview;
