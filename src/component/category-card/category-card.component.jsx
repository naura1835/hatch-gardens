import React from "react";
import { withRouter } from "react-router-dom";

import "./category-card.style.scss";

function CategoryCard({ title, imageUrl, size, linkUrl, history, match }) {
  return (
    <div
      // className={`${size} category-card`}
      className="category-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="category-content">
        <p className="p">{title}</p>
        <h3 style={{ color: "#fff" }}>View More</h3>
      </div>
    </div>
  );
}
export default withRouter(CategoryCard);
