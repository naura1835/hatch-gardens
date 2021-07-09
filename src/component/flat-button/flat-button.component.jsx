import React from "react";

import { ButtonWrapper } from "./flat-button.styles";

const FlatButton = ({ children, ...otherProps }) => (
  <ButtonWrapper {...otherProps}>{children}</ButtonWrapper>
);
export default FlatButton;
