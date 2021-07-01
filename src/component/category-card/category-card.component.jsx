import React from "react";
import { withRouter } from "react-router-dom";

import "./category-card.style.scss";

function CategoryCard({ title, imageUrl, size, linkUrl, history, match }) {
  return (
    <div
      className={`${size} category-card`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      // imageUrl={imageUrl}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      //i added shop, in the tutorials he didnt
    >
      <div className="category-content">
        <p className="p">{title}</p>
        <h3 style={{ color: "#fff" }}>View More</h3>
      </div>
    </div>
  );
}
export default withRouter(CategoryCard);
