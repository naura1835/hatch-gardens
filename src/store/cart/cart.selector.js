import { createSelector } from "reselect";

const cartReducerSelector = (state) => state.cart;

export const isCartOpenSelector = createSelector(
  [cartReducerSelector],
  (cart) => cart.isOpen
);

export const cartItemsSelector = createSelector(
  [cartReducerSelector],
  (cart) => cart.cartItems
);

export const cartCountSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    cartItems.reduce((total, item) => (total = total + item.quantity), 0)
);

export const cartSubtotalSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    cartItems.reduce(
      (total, item) => (total = total + item.price * item.quantity),
      0
    )
);
