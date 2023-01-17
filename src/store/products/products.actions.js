import { PRODUCTS_ACTION_TYPES } from "./products.types";

// const getDetails = (products, productName) => {
//   const collection = Object.keys(products).map((key) => products[key].items);

//   for (let i = 0; i < collection.length; i++) {
//     const found = collection[i].find(
//       (item) => item.name.toLowerCase() === productName.toLowerCase()
//     );
//     if (!!found) return found;
//   }
// };

export const setProducts = (products) => {
  return { type: PRODUCTS_ACTION_TYPES.SET_PRODUCTS, payload: products };
};

export const setProductName = (productName) => {
  return { type: PRODUCTS_ACTION_TYPES.SET_PRODUCT_NAME, payload: productName };
};

// export const setProductDetails = (products, productName) => {
//   const item = getDetails(products, productName);
//   return { type: PRODUCTS_ACTION_TYPES.SET_PRODUCT_DETAILS, payload: item };
// };
