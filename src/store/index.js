import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";

import mainApi from "./apis";
import productsSlice from "./products-slice";

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
});

export default store;
