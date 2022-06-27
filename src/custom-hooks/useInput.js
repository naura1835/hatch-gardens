import { useState } from "react";

const useInput = (initialValue) => {
  const [formValues, setFormValues] = useState(initialValue);

  const handleChange = (event) => {
    // setValue(event.target.value);
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const resetFormFields = () => {
    setFormValues(initialValue);
  };

  return { formValues, handleChange, resetFormFields };
};

export default useInput;
