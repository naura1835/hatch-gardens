import React from "react";

import CategoryCard from "../category-card/category-card.component";
import { categoryData } from "../../data/categoryListData";

import "./category.style.scss";

function Category() {
  return (
    <div className="category-list">
      {categoryData.map(({ id, ...otherCategoryProps }) => (
        <CategoryCard key={id} {...otherCategoryProps} />
      ))}
    </div>
  );
}

export default Category;
