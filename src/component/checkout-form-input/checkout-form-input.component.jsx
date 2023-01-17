import React, { useEffect, useRef } from "react";

import { Wrapper, FormLabel, FormInput } from "./checkout-form-input.styles";

const CheckoutFormInput = ({ label, error, handleChange, ...otherProps }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (error) inputRef.current.focus();
  }, [error]);
  return (
    <Wrapper>
      <FormLabel>
        {label} <span style={{ color: "#C21818" }}>*</span>
      </FormLabel>
      <FormInput ref={inputRef} onChange={handleChange} {...otherProps} />
      {error && (
        <span style={{ color: "#C21818", fontSize: "12px" }}>{error}</span>
      )}
    </Wrapper>
  );
};
export default CheckoutFormInput;
