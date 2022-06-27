import React from "react";
import { Link } from "react-router-dom";

import useInput from "../../custom-hooks/useInput";

import CustomButton from "../../component/custom-buttom/custom-button.component";
import FormInput from "../../component/form-input/form-input.component";

import { ReactComponent as Plant } from "../../assets/plants/plant.svg";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import {
  Wrapper,
  SignInWrapper,
  Title,
  SubTitle,
  ButtonGroup,
} from "./sign-in.styles";

const SignIn = () => {
  const { formValues, handleChange, resetFormFields } = useInput({
    email: "",
    password: "",
  });

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    const { email, password } = formValues;
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <SignInWrapper>
        <>
          <Title>Login</Title>
          <SubTitle>
            Don't have an account?&nbsp;
            <Link
              to="/register"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "0.41em",
              }}
            >
              Create Account
            </Link>
          </SubTitle>
        </>

        <form onSubmit={handleSubmit}>
          {/*  */}
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={formValues.email}
            handleChange={handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={formValues.password}
            handleChange={handleChange}
            required
          />
          <ButtonGroup>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={logGoogleUser} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </ButtonGroup>
        </form>
      </SignInWrapper>
      <Plant />
    </Wrapper>
  );
};

export default SignIn;
