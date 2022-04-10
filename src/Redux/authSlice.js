import { createSlice } from "@reduxjs/toolkit";
import {
  authTest,
  authRegister,
  authLogin,
  auhtLogOut,
  fetchCurrentUser,
} from "./authSliceOperations";

const initialState = {
  token: null,
  user: {
    name: "",
    email: "",
  },
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  extraReducers: {
    [authRegister.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.isLoggedIn = true;
    },
    [authRegister.rejected]: (state, action) => {
      console.log(action);
    },
    [authLogin.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.isLoggedIn = true;
    },
    [auhtLogOut.fulfilled]: (state, action) => {
      state.token = null;
      state.user.name = "";
      state.user.email = "";
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
