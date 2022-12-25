import { createSlice } from "@reduxjs/toolkit";

let initialState = { value: 0 };

const DaySlice = createSlice({
  name: "day",
  initialState,
  reducers: {
    recruitDay(state, action) {
      state.value = action.payload.day;
    },
  },
});

export const recruitreducer = DaySlice.reducer;

export const action = DaySlice.actions;
