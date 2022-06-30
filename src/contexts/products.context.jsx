import React, { createContext, useState } from "react";

import { shopData } from "../data/shopData";

const defaultValue = {
  products: null,
  setProducts: () => {},
};

export const ProductsContext = createContext(defaultValue);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(shopData);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
