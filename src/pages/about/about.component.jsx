import React from "react";

import AboutHero from "../../component/about-hero/about-hero.component";
import AboutUs from "../../component/about-us/about-us.component";

import { Wrapper } from "./about.styles";

const AboutPage = () => {
  return (
    <Wrapper>
      <AboutHero />
      <AboutUs />
    </Wrapper>
  );
};
export default AboutPage;
