import { createSlice } from "@reduxjs/toolkit";

let initialState = { value: 0 };
//state.value가 이거 초기값 아무거나 가능

const companyuserSlice = createSlice({
  name: "companyUser",
  initialState,
  reducers: {
    getuserInfo(state, action) {
      state.value = action.payload.id;
    },
  },
});

export const companyreducer = companyuserSlice.reducer;
//companyreducer값 아무거나

export const action = companyuserSlice.actions;
