import { createSlice } from "@reduxjs/toolkit";
import { getLocalStogae } from "../../services/Storage";

const userToken = getLocalStogae("_token");

console.log("userToken: ", userToken);

const initialState = {
  token: userToken,
  user: null,
  isAuth: !!userToken,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuth = true;
    },
    logout: (state, action) => {
      state.token = null;
      state.user = null;
      state.isAuth = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
