import React, { useContext } from "react";
import { Link } from "react-router-dom";

import useInput from "../../custom-hooks/useInput";
import { UserContext } from "../../contexts/user.context";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import CustomButton from "../../component/custom-buttom/custom-button.component";
import FormInput from "../../component/form-input/form-input.component";
import { ReactComponent as Plant } from "../../assets/plants/plant.svg";

import { Wrapper, SignUpWrapper, Title, OptionGroup } from "./register.styles";

const Register = () => {
  const { formValues, handleChange, resetFormFields } = useInput({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = formValues;

  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) return;
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use, cannot create user");
      } else {
        console.log("error while creating a user", error);
      }
    }
  };

  return (
    <Wrapper>
      <SignUpWrapper>
        <Title>Create account</Title>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Name"
            value={displayName}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            handleChange={handleChange}
            required
          />
          <OptionGroup>
            <CustomButton
              type="submit"
              style={{ justifySelf: "center", width: "400px" }}
            >
              Sign Up
            </CustomButton>
            <Link
              to="/shop"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "0.41em",
                width: "100%",
                fontSize: "17px",
              }}
            >
              Go back to Shop
            </Link>
          </OptionGroup>
        </form>
      </SignUpWrapper>
      <Plant />
    </Wrapper>
  );
};

export default Register;
