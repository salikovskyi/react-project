import { createSlice } from "@reduxjs/toolkit";
import SlimmomAPI from "../../api/SlimmomAPI/SlimmomAPI";
import {
  fetchUserInfo,
  loginUser,
  registerUser,
  logoutUser,
  refreshUser,
} from "./authOperations";

const initialState = {
  user: { username: "", email: "" },
  token: null,
  sid: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [fetchUserInfo.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchUserInfo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user.email = payload.email;
      state.user.username = payload.username;
    },
    [fetchUserInfo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      SlimmomAPI.setToken(payload.accessToken);
      state.token = payload.accessToken;
      state.sid = payload.sid;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user.email = payload.user.email;
      state.user.username = payload.user.username;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logoutUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [logoutUser.fulfilled]: (state) => {
      SlimmomAPI.unsetToken();
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user.email = "";
      state.user.username = "";
      state.token = null;
      state.id = null;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.sid = payload.id;
      state.user.email = payload.email;
      state.user.username = payload.username;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [refreshUser.pending]: (state) => {
      //   state.isLoading = true;
      state.error = null;
    },
    [refreshUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.sid = payload.sid;
      state.token = payload.newAccessToken;
    },
    [refreshUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;