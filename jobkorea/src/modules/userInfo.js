import { createSlice } from "@reduxjs/toolkit";

let initialState = { value: 0 };

const companyuserSlice = createSlice({
  name: "companyUser",
  initialState,
  reducers: {
    getuserInfo(state, action) {
      state.value = action.payload.id;
    },
    logoutCompany(state) {
      state.value = 0;
    },
  },
});

export const companyreducer = companyuserSlice.reducer;

export const action = companyuserSlice.actions;
