import React, { useEffect, useRef, useState } from "react";
import { gsap, Expo } from "gsap";
import { Wrapper, SpanText } from "./text-animation.styles";

const TextAnimation = () => {
  let arrRefs = useRef([]);

  arrRefs.current = [];

  const textArr = ["indoor", "outdoor", "office"];

  const [count, setCount] = useState(0);
  const [items, setItems] = useState(textArr[2].split(""));

  var timeline = gsap.timeline();

  useEffect(() => {
    timeline
      .fromTo(
        arrRefs.current,
        {
          opacity: 0,
          y: "-100px",
          skewX: "10deg",
          skewY: "10deg",
          rotateZ: "30deg",
          filter: "blur(10px)",
          delay: 0.5,
        },
        {
          opacity: 1,
          y: 0,
          skewX: "0deg",
          skewY: "0deg",
          rotateZ: "0deg",
          filter: "blur(0px)",
          duration: 0.6,
          ease: Expo.easeOut,
          //   delay: 0.2,
          stagger: {
            amount: 0.3,
          },
        }
      )
      .to(arrRefs.current, {
        opacity: 0,
        y: "-100px",
        skewX: "10deg",
        skewY: "10deg",
        rotateZ: "30deg",
        filter: "blur(10px)",
        duration: 0.4,
        delay: 0.2,
        stagger: {
          amount: 0.5,
        },
      })
      .call(function () {
        if (count === textArr.length - 1) {
          setCount(count - 2);
        } else {
          setCount(count + 1);
        }
        setItems(textArr[count].split(""));

        // if (count === 0) {
        //   console.log("boom");
        //   setCount(count + 1);
        //   setItems(outdoorArr);
        // } else {
        //   if (count === 1) {
        //     setCount(count + 1);
        //     setItems(officeArr);
        //   } else {
        //     setCount(0);
        //     setItems(indoorArr);
        //   }
        // }
      });
  });
  const addToRefs = (el) => {
    if (el && !arrRefs.current.includes(el)) {
      arrRefs.current.push(el);
    }
  };

  return (
    <Wrapper>
      {items.map((item, index) => (
        <SpanText key={index} ref={addToRefs}>
          {item}
        </SpanText>
      ))}
    </Wrapper>
  );
};
export default TextAnimation;
