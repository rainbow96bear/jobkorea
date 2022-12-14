import { createSlice } from "@reduxjs/toolkit";

<<<<<<< HEAD
const initialState = {
  isLogged: false,
  individual_name: null,
  individual_id: null,
};

export const LoggedState = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAccount(state, action) {
      state.isLogged = true;
      state.individual_name = action.payload.individual_name;
      state.individual_id = action.payload.individual_id;
    },
    logoutAccount(state) {
      state.isLogged = false;
      state.individual_name = null;
      state.individual_id = null;
=======
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
>>>>>>> companyRegistFunc
    },
  },
});

<<<<<<< HEAD
// Action creators are generated for each case reducer function
export const { loginAccount, logoutAccount } = LoggedState.actions;

export default LoggedState.reducer;
=======
export const companyreducer = companyuserSlice.reducer;

export const action = companyuserSlice.actions;
>>>>>>> companyRegistFunc
