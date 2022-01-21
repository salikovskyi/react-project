import { searchProduct } from "./filterOperations";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const filterProductsSlice = createSlice({
  name: "filter",
  initialState,
  extraReducers: {
    [searchProduct.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [searchProduct.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [searchProduct.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.isLoading = false;
    },
  },
});

export default filterProductsSlice.reducer;
