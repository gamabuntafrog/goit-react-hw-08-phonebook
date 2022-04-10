import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "./contactsSliceOperations";

const initialState = {
  contacts: [],
  filter: "",
};

export const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState,
  reducers: {
    filter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [getContacts.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
    },
  },
});

export const { filter } = contactsSlice.actions;

export default contactsSlice.reducer;
