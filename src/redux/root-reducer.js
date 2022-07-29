import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import shopReducer from "./shop/shop.reducer";
import heroContentReducer from "./hero-content/hero-content.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  shop: shopReducer,
  hero: heroContentReducer,
});

export default persistReducer(persistConfig, rootReducer);
