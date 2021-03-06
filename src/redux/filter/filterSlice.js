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
  reducers: {
    clearHintList: (state) => {
      state.products.length = 0;
    },
  },
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
      payload.length < 10
        ? (state.products = payload)
        : (state.products = payload.slice(0, 9));
      state.isLoading = false;
    },
  },
});

export default filterProductsSlice.reducer;
export const { clearHintList } = filterProductsSlice.actions;
