"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeNavIndex: 0,
};

export const CurrActiveNavItem = createSlice({
  name: "CurrActiveNavItem",
  initialState,
  reducers: {
    setCurrActiveNavItem: (state, action) => {
      console.log(
        "Inside setCurrActiveNavItem reducer and payload is ",
        action.payload
      );
      state.activeNavIndex = action.payload;
    },
    resetCurrActiveNavItem: () => {
      console.log("Inside resetCurrActiveNavItem reducer");
      return { ...initialState };
    },
  },
});

export const { setCurrActiveNavItem, resetCurrActiveNavItem } =
  CurrActiveNavItem.actions;

export default CurrActiveNavItem.reducer;
