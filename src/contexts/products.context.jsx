import React, { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils";

// import { shopData as data } from "../data/shopData";

const defaultValue = {
  products: {},
  // productDetails: {},
  // setProductDetails: () => {},
};

export const ProductsContext = createContext(defaultValue);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoriesMap = await getCategoriesAndDocument();

      setProducts(categoriesMap);
    };
    getCategoryMap();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
