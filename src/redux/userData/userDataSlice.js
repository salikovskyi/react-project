import { createSlice } from "@reduxjs/toolkit";
import {
  dailyRateInfo,
  userDaily,
  addEatenProduct,
  removeEatenProduct,
  dayInfo,
} from "./userDataOperations";
import { fetchUserInfo, loginUser } from "../auth/authOperations";

const initialState = {
  unauthData: {
    dailyRate: 0,
    notAllowedProducts: [],
  },
  summaries: [],
  eatenProducts: [],
  day: null,
  userData: null,
  daySummary: {
    date: "2020-12-31",
    kcalLeft: 5,
    kcalConsumed: 0,
    dailyRate: 0,
    percentsOfDailyRate: 0,
    userId: "",
    id: "",
  },
  notAllowedProducts: [],
  isLoading: false,
  error: null,
  isModalOpen: false,
};

const accountDataSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.userData = payload.user.userData;
      state.isLoading = false;
    },
    [fetchUserInfo.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [fetchUserInfo.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [fetchUserInfo.fulfilled]: (state, { payload }) => {
      state.userData = payload.userData;
      state.isLoading = false;
    },
    [dailyRateInfo.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [dailyRateInfo.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [dailyRateInfo.fulfilled]: (state, { payload }) => {
      state.unauthData = payload;
      state.isLoading = false;
      state.isModalOpen = true;
    },
    [userDaily.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [userDaily.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [userDaily.fulfilled]: (state, { payload }) => {
      state.dailyRate = payload.data;
      state.summaries = payload.summaries;
      state.notAllowedProducts = payload.notAllowedProducts;
      state.isLoading = false;
    },
    [addEatenProduct.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [addEatenProduct.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [addEatenProduct.fulfilled]: (state, { payload }) => {
      state.eatenProducts = payload.eatenProducts;
      state.daySummary = payload.daySummary;
      state.isLoading = false;
    },
    [removeEatenProduct.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [removeEatenProduct.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [removeEatenProduct.fulfilled]: (state, { payload }) => {
      state.products = state.products.filter(
        (product) => product.id !== payload.id
      );
      state.isLoading = false;
    },
    [dayInfo.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [dayInfo.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [dayInfo.fulfilled]: (state, { payload }) => {
      state.daySummary = payload.data.daySummary
        ? payload.data.daySummary
        : payload.data;
      console.log(payload.data);
      state.eatenProducts = payload.eatenProducts ? payload.eatenProducts : [];
      state.isLoading = false;
    },
  },
});

export default accountDataSlice.reducer;
export const { openModal, closeModal } = accountDataSlice.actions;
