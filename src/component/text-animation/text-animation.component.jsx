import React, { useState } from "react";

import { Wrapper, SpanText } from "./text-animation.styles";

const TextAnimation = () => {
  const textArr = "amazing";
  const [items, setItems] = useState(textArr.split(""));

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
