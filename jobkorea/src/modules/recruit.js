import { createSlice } from "@reduxjs/toolkit";

let initialState = { value: 0, AdDay: 0 };

const DaySlice = createSlice({
  name: "Recruitday",
  initialState,
  reducers: {
    recruitDay(state, action) {
      state.value = action.payload.day;
    },
    recruitAdDay(state, action) {
      state.AdDay = action.payload.AdDay;
      state.AdHour = action.payload.AdHour;
      state.AdMin = action.payload.AdMin;
      state.AdSec = action.payload.AdSec;
    },
    // recruitAdHour(state, action) {
    //   state.AdHour = action.payload.AdHour;
    // },
    // recruitAdMin(state, action) {
    //   state.AdMin = action.payload.AdMin;
    // },
    // recruitAdSec(state, action) {
    //   state.AdSec = action.payload.AdSec;
    // },
  },
});

export const recruitreducer = DaySlice.reducer;

export const action = DaySlice.actions;
