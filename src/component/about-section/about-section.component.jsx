import React from "react";

import {
  SectionWrapper,
  SectionSvgWrapper,
  SectionSvg,
  SectionDetail,
  Title,
  Description,
} from "./about-section.styles";

const AboutSection = ({ data }) => {
  const { image, title, description } = data;
  return (
    <SectionWrapper>
      <SectionSvgWrapper>
        <SectionSvg src={image} />
      </SectionSvgWrapper>
      <SectionDetail>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </SectionDetail>
    </SectionWrapper>
  );
};

export default AboutSection;
