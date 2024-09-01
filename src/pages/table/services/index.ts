import { configureStore } from "@reduxjs/toolkit";
import { rocketApi } from "./rocketApi";

const store = configureStore({
  reducer: {
    [rocketApi.reducerPath]: rocketApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rocketApi.middleware),
});

export default store;