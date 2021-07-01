import React from "react";

import BlogCard from "../blog-card/blog-card.component";
import FlatButton from "../flat-button/flat-button.component";
import { blogData } from "../../data/blogData";

import { Wrapper, Title, BlogGroup } from "./blog-section.styles";

const BlogSection = () => {
  return (
    <Wrapper>
      <Title>Our Blog Post</Title>
      <BlogGroup>
        {blogData.map(({ id, ...otherProps }) => (
          <BlogCard key={id} {...otherProps} />
        ))}
      </BlogGroup>
      <FlatButton>View More</FlatButton>
    </Wrapper>
  );
};

export default BlogSection;
