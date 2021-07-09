import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionItem from "../collection-item/collection-item.component";
import { selectRecentForPreview } from "../../redux/shop/shop.selectors";

import { Wrapper, Title, ItemList } from "./recent-items.styles";

const RecentItems = ({ recent }) => {
  console.log(recent);
  const arr = [];
  recent.forEach((element) => {
    for (let index = 0; index < 2; index++) {
      arr.push(element[index]);
    }
  });
  console.log(arr);
  return (
    <Wrapper>
      <Title>Explore our recent products</Title>
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
