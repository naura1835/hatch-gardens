import React, { useState } from "react";
import { Link } from "react-router-dom";

import CustomButton from "../../component/custom-buttom/custom-button.component";
import FormInput from "../../component/form-input/form-input.component";

import { ReactComponent as Plant } from "../../assets/plants/plant.svg";

import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import { Wrapper, SignInWrapper, Title, ButtonGroup } from "./sign-in.styles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logGoogleUser = async () => {
    const response = signInWithGooglePopup();
    console.log(response);
  };
  return (
    <Wrapper>
      <Plant />
      <SignInWrapper>
        <>
          <Title>Login</Title>
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

        <form>
          {/* onSubmit={this.handleSubmit} */}
          {/* <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={setEmail(email)}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={setPassword(password)}
            label="Password"
            required
          /> */}
          <ButtonGroup>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={logGoogleUser} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </ButtonGroup>
        </form>
      </SignInWrapper>
    </Wrapper>
  );
};

// class SignIn extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//     };
//   }
//   handleSubmit = async (event) => {
//     event.preventDefault();

//     const { email, password } = this.state;

//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//       this.setState({ email: "", password: "" });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   handleChange = (event) => {
//     const { value, name } = event.target;

//     this.setState({ [name]: value });
//   };
//   render() {
//     return (
//       <Wrapper>
//         <Plant />
//         <SignInWrapper>
//           <>
//             <Title>Login</Title>
//             <span>
//               Don't have an account?&nbsp;
//               <Link
//                 to="/register"
//                 style={{
//                   textDecoration: "underline",
//                   textUnderlineOffset: "0.41em",
//                 }}
//               >
//                 Create Account
//               </Link>
//             </span>
//           </>

//           <form onSubmit={this.handleSubmit}>
//             <FormInput
//               name="email"
//               type="email"
//               value={this.state.email}
//               handleChange={this.handleChange}
//               label="Email"
//               required
//             />
//             <FormInput
//               name="password"
//               type="password"
//               value={this.state.password}
//               handleChange={this.handleChange}
//               label="Password"
//               required
//             />
//             <ButtonGroup>
//               <CustomButton type="submit">Sign In</CustomButton>
//               <CustomButton
//                 type="button"
//                 onClick={SignInWithGoogle}
//                 isGoogleSignIn
//               >
//                 Sign In With Google
//               </CustomButton>
//             </ButtonGroup>
//           </form>
//         </SignInWrapper>
//       </Wrapper>
//     );
//   }
// }

export default SignIn;
