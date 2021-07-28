import React from "react";

import {
  Wrapper,
  Radio,
  RadioButtonLabelWrapper,
  RadioButtonLabel,
  SubTitle,
} from "./radio-button.styles";

const RadioButton = ({
  label,
  sublabel,
  handleShipping,
  handleChange,
  ...otherProps
}) => {
  return (
    <Wrapper>
      <Radio {...otherProps} checked={handleShipping} onChange={handleChange} />
      <RadioButtonLabelWrapper>
        <RadioButtonLabel>{label}</RadioButtonLabel>
        <SubTitle>{sublabel}</SubTitle>
      </RadioButtonLabelWrapper>
    </Wrapper>
  );
};

export default RadioButton;
