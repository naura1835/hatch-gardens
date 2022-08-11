import { useSelector } from "react-redux";

import { productsSelector } from "../../store/products/products.selector";

import CollectionItem from "../collection-item/collection-item.component";

import { Wrapper, Title, ItemList, MainText } from "./recent-items.styles";

const RecentItems = () => {
  const products = useSelector(productsSelector);

  const recentProducts = Object.keys(products).map(
    (key) => products[key].items
  );

  const arr = [];

  recentProducts.map((products) => {
    for (let i = 0; i < 2; i++) {
      arr.push(products[i]);
    }
  });

  return (
    <Wrapper>
      <Title>Spice up your indoor space.</Title>
      <MainText>
        Looking to add some colour and warmth to your living space? Explore our
        collection and we will help you find the perfect plant that will
        transform your space.
      </MainText>
      <ItemList>
        {arr.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemList>
    </Wrapper>
  );
};

export default RecentItems;
