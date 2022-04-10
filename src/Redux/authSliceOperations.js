import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
const token = {
  set(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common["Authorization"] = ``;
  },
};

export const authRegister = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    try {
      const { data } = await axios.post(
        "https://connections-api.herokuapp.com/users/signup",
        credentials
      );
      token.set(data.token);
      return data;
    } catch {}
  }
);

export const authLogin = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch {}
});

export const auhtLogOut = createAsyncThunk(
  "auth/logOut",
  async (credentials) => {
    try {
      await axios.post("/users/logout");
      token.unset();
    } catch {}
    return credentials;
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log("токена нет");
      return thunkApi.rejectWithValue("");
    }

    token.set(persistedToken);
    try {
      const response = await axios.get("/users/current");
      return response.data;
    } catch {}
  }
);
