import React, { createContext, useEffect, useRef, useState } from "react";

import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils";

const defaultValue = {
  products: {},
  productDetails: {},
};

export const ProductsContext = createContext(defaultValue);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoriesMap = await getCategoriesAndDocument();

      setProducts(categoriesMap);
    };
    getCategoryMap();
  }, []);

  const getDetails = (productName) => {
    const collection = Object.keys(products).map((key) => products[key].items);

    for (let i = 0; i < collection.length; i++) {
      collection[i].find((item) => {
        if (item.name.toLowerCase() === productName.toLowerCase()) {
          setProductDetails(item);
        }
      });
    }
  };

  return (
    <ProductsContext.Provider value={{ products, productDetails, getDetails }}>
      {children}
    </ProductsContext.Provider>
  );
};
