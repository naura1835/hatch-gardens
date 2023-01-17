// export const addCartItem = (cartItems, productToAdd) => {
//     const cartItemExist = cartItems.find((item) => item.id == productToAdd.id);

//     if (cartItemExist) {
//       return cartItems.map((item) =>
//         item.id == productToAdd.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//     }
//     return [...cartItems, { ...productToAdd, quantity: 1 }];
//   };

// export const updateItemCount = (items) => {
//     return items.reduce((total, item) => (total = total + item.quantity), 0);
//   };

// export const removeItemFromCart = (items, itemToBeRemoved) => {
//     return items.filter((item) => item.id !== itemToBeRemoved.id);
//   };

// export const calculateSubTotal = (items) => {
//     return items.reduce(
//       (total, item) => (total = total + item.price * item.quantity),
//       0
//     );
//   };
