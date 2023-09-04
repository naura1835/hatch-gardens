import { combineReducers } from "@reduxjs/toolkit";

import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./products/products.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
});
