import React from "react";

import CategoryCard from "../category-card/category-card.component";
import { categoryData } from "../../data/categoryListData";

import { CategoryList } from "./category.styles";

function Category() {
  return (
    <CategoryList>
      {categoryData.map(({ id, ...otherCategoryProps }) => (
        <CategoryCard key={id} {...otherCategoryProps} />
      ))}
    </CategoryList>
  );
}

export default Category;
