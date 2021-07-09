import React from "react";
import { withRouter } from "react-router-dom";

import { Wrapper, BlogImage, BlogTitle, Description } from "./blog-card.styles";

const BlogCard = ({ title, description, image, history, match }) => {
  return (
    <Wrapper>
      <BlogImage src={image} />
      <BlogTitle onClick={() => history.push(`${match.url}/${title}`)}>
        {title}
      </BlogTitle>
      <Description>
        {description.split(" ").splice(0, 50).join(" ").concat("...")}
      </Description>
    </Wrapper>
  );
};

export default withRouter(BlogCard);
