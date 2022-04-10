import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendContact = createAsyncThunk(
  "/contacts/post",
  async (credentials) => {
    try {
      const response = await axios.post("/contacts", credentials);
    } catch {}
  }
);

export const getContacts = createAsyncThunk("/contacts/get", async () => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch {}
});

export const deleteContact = createAsyncThunk(
  "/contacts/delete",
  async (id) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
    } catch {}
  }
);

export const changeContact = createAsyncThunk(
  "/contacts/change",
  async ({ newName, newNumber, id }) => {
    try {
      const response = await axios.patch(`contacts/${id}`, {
        name: newName,
        number: newNumber,
      });
    } catch {}
  }
);
