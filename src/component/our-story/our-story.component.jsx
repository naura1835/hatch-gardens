import React from "react";

import FlatButton from "../flat-button/flat-button.component";
import { ReactComponent as Plant } from "../../assets/plant.svg";

import {
  Wrapper,
  InnerWrapper,
  StoryWrapper,
  Title,
  Description,
} from "./our-story.styles";

const OurStory = () => (
  <Wrapper>
    <InnerWrapper>
      <StoryWrapper>
        <Title>Our Story</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          malesuada quis mauris et efficitur. Nullam scelerisque, quam vel
          malesuada venenatis, risus quam maximus justo, nec viverra metus purus
          quis arcu. Aenean consequat leo quam, efficitur viverra arcu fringilla
          non. Praesent a elementum enim.
        </Description>
      </StoryWrapper>
      <Plant />
    </InnerWrapper>
    <FlatButton>Read Our Story</FlatButton>
  </Wrapper>
);
export default OurStory;
