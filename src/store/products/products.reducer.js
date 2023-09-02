import { PRODUCTS_ACTION_TYPES } from "./products.types";

const PRODUCTS_INITIAL_STATE = {
  products: [],
  productName: "",
  isLoading: false,
  error: null,
  // productDetails: {},
};
export const productReducer = (state = PRODUCTS_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.SET_PRODUCTS_START:
      return { ...state, isLoading: true };
    case PRODUCTS_ACTION_TYPES.SET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case PRODUCTS_ACTION_TYPES.SET_PRODUCTS_FAILED:
      return { ...state, isLoading: false, error: payload };
    case PRODUCTS_ACTION_TYPES.SET_PRODUCT_NAME:
      return { ...state, productName: payload };
    // case PRODUCTS_ACTION_TYPES.SET_PRODUCT_DETAILS:
    //   return { ...state, productDetails: payload };
    default:
      return state;
  }
};
