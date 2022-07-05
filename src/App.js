import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { UserContext } from "./contexts/user.context";

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

import "./App.css";

const App = () => {
  const { currentUser } = useContext(UserContext);

  return (
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
          element={currentUser ? <Navigate to="/" /> : <SignIn />} // if user is already signed in navigate back to home
        />
        <Route path="register" element={<Register />} />
        {/* this.props.currentUser ? <Navigate to="/" /> :  */}
      </Route>
    </Routes>
  );
};
export default App;
