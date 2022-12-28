import { createSlice } from "@reduxjs/toolkit";

let initialState = { value: false, sidebar: false };

const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    companyMordal(state) {
      state.value = !state.value;
    },

    sidebar(state) {
      state.sidebar = !state.sidebar;
    },
  },
});

export const buttonreducer = buttonSlice.reducer;

export const action = buttonSlice.actions;
