import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import { UserProvider } from "./contexts/user.context";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignIn from "./pages/sign-in/sign-in.component";
import Register from "./pages/register/register.component";
import Product from "./pages/product-details/product-detail.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import BlogPage from "./pages/blog/blog.component";
import BlogDetails from "./component/blog-details/blog-details.component";
import FaqsPage from "./pages/faqs/faqs.component";
import CollectionsOverview from "./component/collections-overview/collections-overview.component";
import CollectionPage from "./pages/collection/collection.component";
import AboutPage from "./pages/about/about.component";
import Layout from "./layout/layout.component";

// import { selectCartHidden } from "./redux/cart/cart.selectors";

import "./App.css";

const App = () => {
  // unsubscribeFromAuth = null;

  // componentDidMount() {
  //   const { setCurrentUser } = this.props;

  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);
  //       userRef.onSnapshot((snapshot) => {
  //         setCurrentUser({
  //           id: snapshot.id,
  //           ...snapshot.data(),
  //         });
  //       });
  //     } else {
  //       setCurrentUser(userAuth);
  //     }
  //   });
  // }
  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }
  // render() {
  const documentWidth = document.documentElement.clientWidth;
  const windowWidth = window.innerWidth;
  const scrollBarWidth = windowWidth - documentWidth;

  return (
    // <div
    // render={
    //   this.props.hidden
    //     ? document.body.classList.add("hide")
    //     : document.body.classList.remove("hide")
    // }
    // style={{
    //   height: "100%",
    //   position: "relative",
    //   display: "block",
    //   paddingBottom: "50px",
    //   paddingRight: this.props.hidden ? scrollBarWidth : 0,
    // }}
    // <>
    <UserProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="shop" element={<ShopPage />}>
            <Route index element={<CollectionsOverview />} />
            <Route path=":collectionId" element={<CollectionPage />} />
          </Route>
          <Route path="blog" element={<BlogPage />}>
            <Route path={`:blogTitle`} element={<BlogDetails />} />
          </Route>
          <Route path="products/:itemId" element={<Product />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="faqs" element={<FaqsPage />} />
          <Route
            path="signin"
            element={<SignIn />} //this.props.currentUser ? <Navigate to="/" /> :
          />
          <Route path="register" element={<Register />} />
          {/* this.props.currentUser ? <Navigate to="/" /> :  */}
        </Route>
      </Routes>
    </UserProvider>
  );
  // }
};
// const mapStateToProps = createStructuredSelector({
//   hidden: selectCartHidden,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
