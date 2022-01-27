import { createSlice } from "@reduxjs/toolkit";
import {
  dailyRateInfo,
  userDaily,
  addEatenProduct,
  removeEatenProduct,
  dayInfo,
} from "./userDataOperations";
import { fetchUserInfo, loginUser } from "../auth/authOperations";
import dateFormatter from "../../utils/helpers/dateFormatter";

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
    _id: null,
  },
  notAllowedProducts: [],
  isLoading: false,
  error: null,
  isModalOpen: false,
  currentDate: dateFormatter,
  rootClass: "SlimMom",
  firstEntry: false,
};

const accountDataSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    rootClass: (state, { payload }) => {
      state.rootClass = payload;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    setCurrentDate: (state, { payload }) => {
      state.currentDate = payload;
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
      console.log(payload);
      state.daySummary = payload.user.userData;
      state.isLoading = false;
      state.isModalOpen = false;
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
      console.log(payload);
      state.daySummary = payload.days.find(
        (day) => day.date === state.currentDate
      ).daySummary;
      state.isLoading = false;
      state.notAllowedProducts = payload.userData.notAllowedProducts;
      state.isModalOpen = false;
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
      state.dailyRate = payload.data.dailyRate;
      state.daySummary = payload.data.summaries.find(
        (day) => day.date === dateFormatter
      );
      state.notAllowedProducts = payload.data.notAllowedProducts;
      state.isLoading = false;
    },
    [addEatenProduct.pending]: (state) => {
      state.error = null;
      // state.isLoading = true;
    },
    [addEatenProduct.rejected]: (state, { payload }) => {
      state.error = payload;
      // state.isLoading = false;
    },
    [addEatenProduct.fulfilled]: (state, { payload }) => {
      console.log("eaten", payload.data);
      state.eatenProducts = payload.data.day.eatenProducts;
      state.daySummary = payload.data.daySummary;
      // state.isLoading = false;
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
      state.eatenProducts = state.eatenProducts.filter(
        (product) => product.id !== payload.removedProductId
      );
      state.daySummary = payload.newDaySummary;
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
      console.log(payload);
      state.daySummary = payload.daySummary ? payload.daySummary : payload;
      state.eatenProducts = payload.eatenProducts ? payload.eatenProducts : 0;
      state.dayId = payload.id;
      state.isLoading = false;
    },
  },
});

export default accountDataSlice.reducer;
export const { openModal, closeModal, setCurrentDate, rootClass } =
  accountDataSlice.actions;
