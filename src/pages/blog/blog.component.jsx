import React, { useEffect } from "react";

import HeroWrapperSection from "../../component/hero-wrapper/hero-wrapper.component";
import BlogCard from "../../component/blog-card/blog-card.component";

import { blogData } from "../../data/blogData";

import { Wrapper, BlogWrapper } from "./blog.styles";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Wrapper>
      <HeroWrapperSection
        title="Plant Care Blog & Tips"
        description="Everything you need to know about your plants. Get tools and tip to take better care of your plants.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non tellus tempus tellus sollicitudin convallis"
        heroImage="/assets/plants/Indoor.svg"
      />
      <BlogWrapper>
        {blogData.map(({ id, ...otherProps }) => (
          <BlogCard key={id} {...otherProps} />
        ))}
      </BlogWrapper>
    </Wrapper>
  );
};

export default BlogPage;
