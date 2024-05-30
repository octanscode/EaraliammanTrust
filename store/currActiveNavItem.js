import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeNavIndex: 0,
};

export const CurrActiveNavItem = createSlice({
  name: "CurrActiveNavItem",
  initialState,
  reducers: {
    setCurrActiveNavItem: (state, action) => {
      state.activeNavIndex = action.payload;
    },
    resetCurrActiveNavItem: () => {
      return { ...initialState };
    },
  },
});

export const { setCurrActiveNavItem, resetCurrActiveNavItem } =
  CurrActiveNavItem.actions;

export default CurrActiveNavItem.reducer;
