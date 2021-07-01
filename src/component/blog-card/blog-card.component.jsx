import React from "react";

import { Wrapper, BlogImage, BlogTitle, Description } from "./blog-card.styles";

const BlogCard = ({ title, description, image }) => {
  return (
    <Wrapper>
      <BlogImage src={image} />
      <BlogTitle>{title}</BlogTitle>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default BlogCard;
