import React, { useEffect } from "react";

import { blogData } from "../../data/blogData";

import {
  Wrapper,
  BlogTitle,
  BlogImage,
  DescriptionWrapper,
  BlogDescription,
} from "./blog-details.styles";

const BlogDetails = ({ match }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Wrapper>
      {blogData
        .filter((blog) => blog.title === match.params.blogTitle)
        .map(({ title, image, description }) => (
          <>
            <BlogTitle>{title}</BlogTitle>
            <BlogImage src={image} />
            <DescriptionWrapper>
              <BlogDescription
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </DescriptionWrapper>
          </>
        ))}
    </Wrapper>
  );
};

export default BlogDetails;
