import React, { createContext, useState } from "react";

import { shopData } from "../data/shopData";

const defaultValue = {
  products: null,
  setProducts: () => {},
  productDetails: {},
  setProductDetails: () => {},
};

export const ProductsContext = createContext(defaultValue);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(shopData);
  const [productDetails, setProductDetails] = useState({});

  const showProductDetails = (id) => {
    Object.keys(products)
      .map((key) => products[key])
      .filter((product) => product.id == id);
  };

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
