import React from "react";
import { withRouter } from "react-router-dom";

import BlogCard from "../blog-card/blog-card.component";
import FlatButton from "../flat-button/flat-button.component";
import { blogData } from "../../data/blogData";

import { Wrapper, Title, BlogGroup } from "./blog-section.styles";

const BlogSection = () => {
  //{ history }
  return (
    <Wrapper>
      <Title>From The Blog</Title>
      <BlogGroup>
        {blogData.map(({ id, ...otherProps }) => (
          <BlogCard key={id} {...otherProps} />
        ))}
      </BlogGroup>
      {/* <FlatButton onClick={() => history.push(`/blog`)}>View More</FlatButton> */}
    </Wrapper>
  );
};

export default BlogSection; //withRouter(
