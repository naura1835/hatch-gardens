import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionItem from "../collection-item/collection-item.component";
import { selectRecentForPreview } from "../../redux/shop/shop.selectors";

import { Wrapper, Title, ItemList, MainText } from "./recent-items.styles";

const RecentItems = ({ recent }) => {
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
