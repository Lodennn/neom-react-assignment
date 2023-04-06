import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";

import mainApi from "./apis";

const store = configureStore({
  reducer: {
    user: userSlice,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
});

export default store;
