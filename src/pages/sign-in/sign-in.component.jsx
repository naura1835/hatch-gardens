import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import useInput from "../../custom-hooks/useInput";

import CustomButton from "../../component/custom-buttom/custom-button.component";
import FormInput from "../../component/form-input/form-input.component";

import { ReactComponent as Plant } from "../../assets/plants/plant.svg";

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

  const { setCurrentUser } = useContext(UserContext);

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
      setCurrentUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    const { email, password } = formValues;
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
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
