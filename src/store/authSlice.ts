import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const TARGET_ADMIN = "admin";
const TARGET_USER = "user";

interface IAuthState {
  name: string;
}

const initialState: IAuthState = {
  name: "h",
};

export interface PayloadLoginAdmin {
  usernameOrEmail: string;
  password: string;
  systemCode: string;
}

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {},
});

export default slice.reducer;
