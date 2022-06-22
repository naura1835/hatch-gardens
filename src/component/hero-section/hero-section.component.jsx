import React from "react";
import { withRouter } from "react-router-dom";

import TextAnimation from "../text-animation/text-animation.component";

import {
  Wrapper,
  ContentWrapper,
  Title,
  Description,
  CTAButton,
} from "./hero-section.styles";

const HeroSection = () => {
  //{ history }
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>
          Home for plants
          {/* <br /> */}
          {/* <TextAnimation /> plants. */}
        </Title>
        <Description>
          my name is berry allen and im the fastest man alive, when i was a
          child...
        </Description>
        {/* <CTAButton onClick={() => history.push("/shop")}>Shop Now</CTAButton> */}
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection; //withRouter(
