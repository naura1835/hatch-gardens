import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} button`}
      //   style={{ backgroundColor: `${backgroundColor}` }}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default CustomButton;
