import React from "react";
import { withRouter } from "react-router-dom";

import {
  CategoryCardWrapper,
  CategoryContent,
  Title,
  ViewMore,
} from "./category-card.styles";

function CategoryCard({ title, imageUrl, value, linkUrl, history, match }) {
  return (
    <CategoryCardWrapper
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={`${value}`}
    >
      <CategoryContent>
        <Title>{title}</Title>
        <ViewMore>View More</ViewMore>
      </CategoryContent>
    </CategoryCardWrapper>
  );
}
export default withRouter(CategoryCard);
