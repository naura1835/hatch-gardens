import React from "react";

import "./form-input.style.scss";

const FormInput = React.forwardRef((props, ref) => {
  const { handleChange, label, ...otherProps } = props;
  return (
    <div className="input-wrapper">
      <input
        ref={ref}
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
});
export default FormInput;
