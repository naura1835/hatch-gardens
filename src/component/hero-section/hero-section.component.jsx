import React from "react";

import TextAnimation from "../text-animation/text-animation.component";

import {
  Wrapper,
  ContentWrapper,
  Title,
  Description,
  CTAButton,
} from "./hero-section.styles";

const HeroSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>
          Home for
          <br />
          <TextAnimation /> plants.
        </Title>
        <Description>
          my name is berry allen and im the fastest man alive, when i was a
          child...
        </Description>
        <CTAButton>Shop Now</CTAButton>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;
