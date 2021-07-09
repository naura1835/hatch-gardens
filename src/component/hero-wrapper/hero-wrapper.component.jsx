import React from "react";

import {
  HeroWrapper,
  TextWrapper,
  HeroImage,
  HeroTitle,
  HeroDescription,
} from "./hero-wrapper.styles";

const HeroWrapperSection = ({ title, description, heroImage }) => {
  return (
    <HeroWrapper>
      <TextWrapper>
        <HeroTitle>{title}</HeroTitle>
        <HeroDescription>{description}</HeroDescription>
      </TextWrapper>
      <HeroImage src={heroImage} />
    </HeroWrapper>
  );
};

export default HeroWrapperSection;
