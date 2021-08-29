import React, { useRef, useEffect } from "react";
import { gsap, Power4 } from "gsap";

import {
  Wrapper,
  TextWrapper,
  Title,
  Description,
  ImageWrapper,
  AboutImage,
} from "./about-hero.styles";

const AboutHero = () => {
  let aboutRef = useRef(null);

  useEffect(() => {
    const title = aboutRef.children[0].children[0];
    const description = title.nextSibling;
    const firstImage = aboutRef.children[1];
    const secondImage = firstImage.nextSibling;

    gsap.from([title, description], {
      duration: 0.7,
      y: 30,
      autoAlpha: 0,
      ease: Power4.easeIn,
      stagger: {
        each: 0.3,
      },
    });

    gsap.to([firstImage, secondImage], {
      duration: 1,
      ease: Power4.easeIn,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      stagger: {
        each: 0.3,
      },
      delay: 0.5,
    });
  });

  return (
    <Wrapper
      ref={(el) => {
        aboutRef = el;
      }}
    >
      <TextWrapper>
        <Title>About Us</Title>
        <Description>
          Get to know about us, how we cam into existence, our drive and
          mission.
        </Description>
      </TextWrapper>
      <ImageWrapper>
        <AboutImage src="https://images.pexels.com/photos/4505452/pexels-photo-4505452.jpeg?cs=srgb&dl=pexels-cottonbro-4505452.jpg&fm=jpg" />
      </ImageWrapper>
      <ImageWrapper>
        <AboutImage src="https://images.pexels.com/photos/4505452/pexels-photo-4505452.jpeg?cs=srgb&dl=pexels-cottonbro-4505452.jpg&fm=jpg" />
      </ImageWrapper>
    </Wrapper>
  );
};
export default AboutHero;
