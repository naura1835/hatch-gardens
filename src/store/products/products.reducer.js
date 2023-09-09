import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";

const PRODUCTS_INITIAL_STATE = {
  products: [],
  productName: "",
  isLoading: false,
  error: null,
  // productDetails: {},
};

export const fetchProductsAsync = createAsyncThunk(
  "products/fecthAllProducts",
  async () => {
    try {
      const products = await getCategoriesAndDocument();
      return products;
    } catch (error) {
      return error.message;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: PRODUCTS_INITIAL_STATE,
  reducers: {
    setProductName(state, action) {
      state.productName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.products = state.products.concat(action.payload);
        state.products = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const { setProductName } = productSlice.actions;

export const productReducer = productSlice.reducer;
