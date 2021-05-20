import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndRegister from "./pages/sign-in-and-register/sign-in-and-register.component";
import Header from "./component/header/header.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      // console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndRegister} />
          {/* <Route path="/shop/cactus" component={ShopPage} />
        <Route path="/shop/indoor-plants" component={ShopPage} />
        <Route path="/shop/outdoor-plants" component={ShopPage} />
        <Route path="/shop/planters" component={ShopPage} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
