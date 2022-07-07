import { createContext, useEffect, useState } from "react";

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
  cartItems: [],
  addItemToCart: () => {},
  itemsCount: 0,
  clearItemFromCart: () => {},
  cartSubtotal: 0,
  setCartSubtotal: () => {},
};

export const CartContext = createContext(defaultValue);

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const clearItemFromCart = (product) => {
    setCartItems(removeItemFromCart(cartItems, product));
  };

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addItemToCart,
    itemsCount,
    clearItemFromCart,
    cartSubtotal,
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isOpen]);

  useEffect(() => {
    setItemsCount(updateItemCount(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setCartSubtotal(calculateSubTotal(cartItems));
  }, [cartItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
