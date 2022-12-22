import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blackList: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWare = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const composedEnhancer = compose(applyMiddleware(...middleWare));

export const store = createStore(persistedReducer, undefined, composedEnhancer);

export const persistor = persistStore(store);
