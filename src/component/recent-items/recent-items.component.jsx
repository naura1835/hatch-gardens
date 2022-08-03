import React, { useContext } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ProductsContext } from "../../contexts/products.context";

import CollectionItem from "../collection-item/collection-item.component";
import { selectRecentForPreview } from "../../redux/shop/shop.selectors";

import { Wrapper, Title, ItemList, MainText } from "./recent-items.styles";

const RecentItems = ({ recent }) => {
  const { products } = useContext(ProductsContext);

  const recentProducts = Object.keys(products)
    .map((key) => products[key].items)
    .filter((item, id) => id < 2);

  console.log(recentProducts);
  const arr = [];
  recent.forEach((element) => {
    for (let index = 0; index < 2; index++) {
      arr.push(element[index]);
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

const mapStateToProps = createStructuredSelector({
  recent: selectRecentForPreview,
});
export default connect(mapStateToProps)(RecentItems);
