import { createSlice } from "@reduxjs/toolkit";

export const addCartItem = (cartItems, productToAdd) => {
  const cartItemExist = cartItems.find((item) => item.id === productToAdd.id);
  console.log("hello from inside addToCart");
  console.log(cartItems);
  console.log(productToAdd);
  if (cartItemExist) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, itemToBeRemoved) => {
  return cartItems.filter((item) => item.id !== itemToBeRemoved.id);
};

const CART_INITIAL_STATE = {
  isOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action) {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
  },
});

export const { setIsOpen, addItemToCart, clearItemFromCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
