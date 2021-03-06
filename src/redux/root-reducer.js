import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import shopReducer from "./shop/shop.reducer";
import heroContentReducer from "./hero-content/hero-content.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  hero: heroContentReducer,
});

export default persistReducer(persistConfig, rootReducer);
