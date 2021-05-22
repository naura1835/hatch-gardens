import React from "react";

import CustomButton from "../../component/custom-buttom/custom-button.component";
import FormInput from "../../component/form-input/form-input.component";

import { ReactComponent as Plant } from "../../assets/plant.svg";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./register.style.scss";
import { Link } from "react-router-dom";

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
      <div className="sign-up">
        <Plant className="plant"></Plant>
        <div className="wrapper">
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
            <div className="option-grp">
              <CustomButton type="submit" style={{ justifySelf: "center" }}>
                Sign Up
              </CustomButton>
              <Link
                to="/shop"
                style={{
                  textDecoration: "underline",
                  textUnderlineOffset: "0.41em",
                }}
              >
                Go back to Shop
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Register;
