import { useState } from "react";
import validateInfo from "./validateInfo";

const useForm = () => {
  const [data, setData] = useState({
    email: "",
    phoneNo: "",
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    shipping: "withinKano",
  });
  const [errors, setErrors] = useState({});
  const { valid, newErrors } = validateInfo(data);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleValidation = () => {
    // e.preventDefault();
    if (!valid) {
      setErrors(newErrors);
    }
  };

  const focusOn = (e) => {
    const { value, name } = e.target;
    if (errors[{ name }]) {
      e.target.focus();
    }
  };

  return { handleChange, handleValidation, data, errors, valid, focusOn };
};
export default useForm;
