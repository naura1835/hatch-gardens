import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { productsMapSelector } from "../../store/products/products.selector";

import CollectionItem from "../../component/collection-item/collection-item.component";

import { Items, Wrapper } from "./collection.styles";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const products = useSelector(productsMapSelector);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const getCollection = async (collectionObj) => {
      const items = await collectionObj?.items;

      setCollection(items);
    };

    getCollection(products[collectionId]);
  }, [products, collectionId]);

  return (
    <Wrapper aria-label={collectionId}>
      <Items>
        {collection &&
          collection.map((item, index) => (
            <CollectionItem key={index} item={item} />
          ))}
      </Items>
    </Wrapper>
  );
};

export default CollectionPage;
