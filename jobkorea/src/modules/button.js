import { createSlice } from "@reduxjs/toolkit";

let initialState = { value: false };

const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    companyMordal(state) {
      state.value = !state.value;
    },

    // loginConfirm(state, action) {
    //   state.value = action.payload.confirmid;
    // },
  },
});

export const buttonreducer = buttonSlice.reducer;

export const action = buttonSlice.actions;
