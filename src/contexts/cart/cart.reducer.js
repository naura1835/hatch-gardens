export const INITIAL_STATE = {
  isOpen: false,
  cartItems: [],
  itemsCount: 0,
  cartSubtotal: 0,
};

export const CART_ACTIONS_TYPE = {
  SET_IS_OPEN: "SET_IS_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case CART_ACTIONS_TYPE.SET_IS_OPEN:
      return { ...state, isOpen: payload };
    case CART_ACTIONS_TYPE.SET_CART_ITEMS:
      console.log({ ...state, ...payload });
      return { ...state, ...payload };
    default:
      throw new Error(`No case for type ${type} found in cart reducer`);
  }
};

export default cartReducer;
