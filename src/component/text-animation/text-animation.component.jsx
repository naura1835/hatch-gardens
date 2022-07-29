import React, { useEffect, useState } from "react";

import { Wrapper, SpanText } from "./text-animation.styles";

const TextAnimation = () => {
  const textArr = "assorted";
  //["cactus", "indoor", "office"];
  const [items, setItems] = useState(textArr.split(""));
  // const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);
  // const [delay, setDelay] = useState(6000);

  // useEffect(() => {
  //   const time = play ? 6000 : undefined;
  //   setDelay(time);
  // }, [play]);
  // setInterval(() => {
  //   if (count === 0) {
  //     setItems(textArr[0].split(""));
  //     setCount(count + 1);
  //   } else {
  //     if (count === 1) {
  //       setCount(count + 1);
  //       setItems(textArr[1].split(""));
  //     } else {
  //       setCount(0);
  //       setItems(textArr[2].split(""));
  //     }
  //   }
  // }, delay);

  //debounce to stop the animation from playing when out of view
  useEffect(() => {
    const timeout = setTimeout(() => {
      setItems(textArr[2].split(""));
      setPlay(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Wrapper id="text-animation">
      {items.map((item, index) => (
        <SpanText key={index} delay={0.1 * index}>
          {item}
        </SpanText>
      ))}
    </Wrapper>
  );
};
export default TextAnimation;
