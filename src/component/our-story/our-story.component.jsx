import React, { useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import FlatButton from "../flat-button/flat-button.component";

import {
  Wrapper,
  InnerWrapper,
  StoryWrapper,
  PlantImage,
  Title,
  Description,
  ButtonWrapper,
} from "./our-story.styles";

gsap.registerPlugin(ScrollTrigger);

const OurStory = ({ history }) => {
  console.log(history);
  let about = useRef(null);
  let button = useRef(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 601px)": function () {
        gsap.to(about, {
          scrollTrigger: {
            trigger: about.children[0],
            // start: "top center+=100",
            toggleActions: "play none none reverse",
          },
          duration: 0.8,
          y: -90,
          yoyo: true,
          force3D: true,
        });
        gsap.to(button, {
          scrollTrigger: {
            trigger: about.children[0],
            toggleActions: "play none none reverse",
          },
          duration: 0.8,
          y: -90,
          yoyo: true,
          force3D: true,
        });
      },
    });
  });
  return (
    <Wrapper>
      <InnerWrapper>
        <StoryWrapper
          ref={(el) => {
            about = el;
          }}
        >
          <Title>Our Story</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            malesuada quis mauris et efficitur. Nullam scelerisque, quam vel
            malesuada venenatis, risus quam maximus justo, nec viverra metus
            purus quis arcu. Aenean consequat leo quam, efficitur viverra arcu
            fringilla non. Praesent a elementum enim.
          </Description>
        </StoryWrapper>
        <PlantImage src="../../assets/plants/Group Plants.svg" />
      </InnerWrapper>
      <ButtonWrapper
        ref={(el) => {
          button = el;
        }}
      >
        <FlatButton onClick={() => history.push(`/about`)}>
          Read Our Story
        </FlatButton>
      </ButtonWrapper>
    </Wrapper>
  );
};
export default withRouter(OurStory);
