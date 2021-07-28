import React from "react";

import { Wrapper, FormLabel, FormInput } from "./custom-select-input.styles";

const CustomSelectInput = ({
  label,
  handleChange,
  data,
  error,
  ...otherProps
}) => {
  return (
    <Wrapper>
      <FormLabel>
        {label} <span style={{ color: "#C21818" }}>*</span>
      </FormLabel>
      <FormInput onChange={handleChange} {...otherProps}>
        {data.map((v, index) => {
          return (
            <option key={index} value={v}>
              {v}
            </option>
          );
        })}
      </FormInput>
      {error && (
        <span style={{ color: "#C21818", fontSize: "12px" }}>{error}</span>
      )}
    </Wrapper>
  );
};
export default CustomSelectInput;
