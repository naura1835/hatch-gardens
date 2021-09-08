import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../../component/custom-buttom/custom-button.component";
import FormInput from "../../component/form-input/form-input.component";

import { ReactComponent as Plant } from "../../assets/plants/plant.svg";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { Wrapper, SignUpWrapper, OptionGroup } from "./register.styles";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      //   await user.sendEmailVerification();
      //   probably something like:
      //   if(user.sendEmailVerification()){
      //       return;
      //   }
      //   the line of code above sends a verification link to the email address
      //   i still have to tweak this part to not sign in and save the person under users db until after verification is successful
      //   then redirect the person to i think maybe the cart page

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <Wrapper>
        <Plant />
        <SignUpWrapper>
          <h3>Create account</h3>
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              onChange={this.handleChange}
              label="Name"
              required
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              label="Password"
              required
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              label="Confirm Password"
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
  }
}
export default Register;
