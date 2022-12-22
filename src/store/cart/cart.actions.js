import { CART_ACTIONS_TYPE } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  const cartItemExist = cartItems.find((item) => item.id === productToAdd.id);

  if (cartItemExist) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItemFromCart = (items, itemToBeRemoved) => {
  return items.filter((item) => item.id !== itemToBeRemoved.id);
};

export const setIsOpen = (bool) => {
  return { type: CART_ACTIONS_TYPE.SET_IS_OPEN, payload: bool };
};
export const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  return { type: CART_ACTIONS_TYPE.SET_CART_ITEMS, payload: newCartItems };
};
export const clearItemFromCart = (cartItems, product) => {
  const newCartItems = removeItemFromCart(cartItems, product);
  return { type: CART_ACTIONS_TYPE.SET_CART_ITEMS, payload: newCartItems };
};
