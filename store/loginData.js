"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdminLoggedIn: false,
};

export const LoginData = createSlice({
  name: "LoginData",
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      console.log("Inside Set Login Data");
      state.isAdminLoggedIn = action.payload;
    },
    resetLoginData: () => {
      return { ...initialState };
    },
  },
});

export const { setLoginData, resetLoginData } = LoginData.actions;

export default LoginData.reducer;
