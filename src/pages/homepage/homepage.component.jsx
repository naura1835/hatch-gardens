import React from "react";

import BlogSection from "../../component/blog-section/blog-section.component";
import Category from "../../component/category/category.component";
import HeroSection from "../../component/hero-section/hero-section.component";
import OurStory from "../../component/our-story/our-story.component";
import RecentItems from "../../component/recent-items/recent-items.component";

import { Wrapper } from "./hompage.styles";

function HomePage() {
  return (
    <Wrapper>
      <HeroSection />
      <Category />
      <RecentItems />
      <OurStory />
      <BlogSection />
    </Wrapper>
  );
}

export default HomePage;
