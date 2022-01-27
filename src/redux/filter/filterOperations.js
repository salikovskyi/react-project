import { createAsyncThunk } from "@reduxjs/toolkit";
import SlimmomAPI from "../../api/SlimmomAPI/SlimmomAPI";

export const searchProduct = createAsyncThunk(
  "userData/searchProduct",
  async (search, { rejectWithValue }) => {
    try {
      const product = await SlimmomAPI.getProduct(search);
      return product.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
