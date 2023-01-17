import { CART_ACTIONS_TYPE } from "./cart.types";

const INITIAL_STATE = {
  isOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
    case CART_ACTIONS_TYPE.SET_IS_OPEN:
      return { ...state, isOpen: payload };
    case CART_ACTIONS_TYPE.SET_CART_ITEMS:
      return { ...state, cartItems: payload };
    default:
      return state;
  }
};
