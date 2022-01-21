import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import authReducer from "./auth/authSlice";
import accountReducer from './userData/userDataSlice'
import filterReducer from './filter/filterSlice'
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    userData: accountReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export { store, persistor };
