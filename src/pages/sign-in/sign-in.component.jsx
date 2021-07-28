import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../../component/custom-buttom/custom-button.component";
import FormInput from "../../component/form-input/form-input.component";

import { ReactComponent as Plant } from "../../assets/plants/plant.svg";

import { auth, SignInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.style.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <Plant className="sign-in-plant"></Plant>
        <div className="signin-wrapper">
          <>
            <h3>Login</h3>
            <span>
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
            </span>
          </>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              type="email"
              value={this.state.email}
              handleChange={this.handleChange}
              label="Email"
              required
            />
            <FormInput
              name="password"
              type="password"
              value={this.state.password}
              handleChange={this.handleChange}
              label="Password"
              required
            />
            <div className="button-group">
              <CustomButton type="submit">Sign In</CustomButton>
              <CustomButton
                type="button"
                onClick={SignInWithGoogle}
                isGoogleSignIn
              >
                Sign In With Google
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
