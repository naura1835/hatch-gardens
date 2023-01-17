import { createContext, useEffect, useReducer } from "react";

import cartReducer, { CART_ACTIONS_TYPE, INITIAL_STATE } from "./cart.reducer";

const addCartItem = (cartItems, productToAdd) => {
  const cartItemExist = cartItems.find((item) => item.id == productToAdd.id);

  if (cartItemExist) {
    return cartItems.map((item) =>
      item.id == productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const updateItemCount = (items) => {
  return items.reduce((total, item) => (total = total + item.quantity), 0);
};

const removeItemFromCart = (items, itemToBeRemoved) => {
  return items.filter((item) => item.id !== itemToBeRemoved.id);
};

const calculateSubTotal = (items) => {
  return items.reduce(
    (total, item) => (total = total + item.price * item.quantity),
    0
  );
};

const defaultValue = {
  isOpen: false,
  setIsOpen: () => {},
};

export const CartContext = createContext(defaultValue);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { isOpen, cartItems, itemsCount, cartSubtotal } = state;

  const showCart = (bool) => {
    dispatch({
      type: CART_ACTIONS_TYPE.SET_IS_OPEN,
      payload: bool,
    });
  };
  const updateCartReducer = (newCartItems) => {
    let count = updateItemCount(newCartItems);
    let subtotal = calculateSubTotal(newCartItems);

    dispatch({
      type: CART_ACTIONS_TYPE.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        itemsCount: count,
        cartSubtotal: subtotal,
      },
    });
  };

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartReducer(newCartItems);
  };

  const clearItemFromCart = (product) => {
    const newCartItems = removeItemFromCart(cartItems, product);
    updateCartReducer(newCartItems);
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isOpen]);

  const value = {
    isOpen,
    showCart,
    cartItems,
    addItemToCart,
    itemsCount,
    clearItemFromCart,
    cartSubtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
