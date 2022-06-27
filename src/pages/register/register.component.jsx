import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../../component/custom-buttom/custom-button.component";
import FormInput from "../../component/form-input/form-input.component";

import { ReactComponent as Plant } from "../../assets/plants/plant.svg";

// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { Wrapper, SignUpWrapper, OptionGroup } from "./register.styles";
import useInput from "../../custom-hooks/useInput";

const Register = () => {
  const { formValues, handleChange, resetFormFields } = useInput({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = formValues;

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
      <Plant />
      <SignUpWrapper>
        <h3>Create account</h3>
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
    </Wrapper>
  );
};

// class Register extends React.Component {
//   constructor(props) {
//     super(props);

//
//   }
//   handleSubmit = async (event) => {
//     event.preventDefault();

//     const { displayName, email, password, confirmPassword } = this.state;

//     if (password !== confirmPassword) {
//       alert("Password don't match");
//       return;
//     }
//     try {
//       const { user } = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );

//       //   await user.sendEmailVerification();
//       //   probably something like:
//       //   if(user.sendEmailVerification()){
//       //       return;
//       //   }
//       //   the line of code above sends a verification link to the email address
//       //   i still have to tweak this part to not sign in and save the person under users db until after verification is successful
//       //   then redirect the person to i think maybe the cart page

//       await createUserProfileDocument(user, { displayName });

//       this.setState({
//         displayName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//
// }
export default Register;
