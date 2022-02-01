import { createAsyncThunk } from "@reduxjs/toolkit";
import SlimmomAPI from "../../api/SlimmomAPI/SlimmomAPI";
import Notiflix from "notiflix";

export const fetchUserInfo = createAsyncThunk(
  "auth/fetchUserInfo",
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    token && SlimmomAPI.setToken(token);
    try {
      const userInfo = await SlimmomAPI.getUserInfo();
      return userInfo.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    try {
      const loginUserResponse = await SlimmomAPI.loginUser(data);
      return loginUserResponse.data;
    } catch ({ message }) {
      Notiflix.Notify.failure("Неверный логин или пароль", 5000);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, thunkAPI) => {
    try {
      const registerUserResponse = await SlimmomAPI.registerUser(data);
      // Notiflix.Notify.success("Вы успешно зарегистрировались!", 5000);
      return registerUserResponse.data;
    } catch ({ message }) {
      // Notiflix.Notify.failure("Такой пользователь уже существует!", 5000);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      const logoutUserResponse = await SlimmomAPI.logoutUser();
      // return logoutUserResponse.status;
      return "success";
    } catch ({ message }) {
      Notiflix.Notify.failure(
        "Время сессии истекло, перезагрузите страницу!",
        5000
      );
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (sid, thunkAPI) => {
    try {
      const refreshedToken = await SlimmomAPI.refreshUser(sid);
      return refreshedToken.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
