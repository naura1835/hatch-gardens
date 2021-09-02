import React from "react";

import AboutSection from "../about-section/about-section.component";

import { aboutData } from "../../data/aboutUsData";

import { Wrapper } from "./about-us.styles";

const AboutUs = () => {
  console.log(aboutData);
  return (
    <Wrapper>
      {aboutData.map((data, index) => (
        <AboutSection key={index} data={data} />
      ))}
    </Wrapper>
  );
};

export default AboutUs;
