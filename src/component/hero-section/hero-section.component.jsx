import React from "react";
import { useNavigate } from "react-router-dom";

import TextAnimation from "../text-animation/text-animation.component";

import {
  Wrapper,
  ContentWrapper,
  Title,
  Description,
  CTAButton,
} from "./hero-section.styles";

const HeroSection = () => {
  const navigateTo = useNavigate();
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>
          Home for
          <br />
          <TextAnimation /> plants.
        </Title>
        <Description>
          We provide you with assorted plants to spice up your environment
        </Description>
        <CTAButton onClick={() => navigateTo("/shop")}>Shop Now</CTAButton>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;
