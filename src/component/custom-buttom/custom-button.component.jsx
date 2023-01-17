import React from "react";

import { Button } from "./custom-button.styles";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <Button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} button`}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
