import { createAsyncThunk } from "@reduxjs/toolkit";
import SlimmomAPI from "../../api/SlimmomAPI/SlimmomAPI";

export const dailyRateInfo = createAsyncThunk(
  "userData/dailyRateInfo",
  async (request, { rejectWithValue }) => {
    try {
      const { data } = await SlimmomAPI.getDailyRateInfo(request);
      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const userDaily = createAsyncThunk(
  "userData/userDaily",
  async ({ userId, request }, { rejectWithValue }) => {
    try {
      const dailyRate = await SlimmomAPI.postGetUserDaily(userId, request);
      return dailyRate;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const addEatenProduct = createAsyncThunk(
  "userData/addGetEatenProduct",
  async (product, { rejectWithValue }) => {
    try {
      const response = await SlimmomAPI.postEatenProduct(product);
      return response;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const removeEatenProduct = createAsyncThunk(
  "userData/removeEatenProduct",
  async (product, { rejectWithValue }) => {
    try {
      console.log(product);
      const response = await SlimmomAPI.deleteEatenProduct(product);
      console.log("respo", response.data);
      return { ...response.data, removedProductId: product.eatenProductId };
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const dayInfo = createAsyncThunk(
  "userData/getDayInfo",
  async (date, { rejectWithValue }) => {
    try {
      const response = await SlimmomAPI.getDayInfo(date);
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
