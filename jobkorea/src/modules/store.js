import { configureStore } from "@reduxjs/toolkit";
import { companyreducer } from "./userInfo";

const store = configureStore({
  reducer: { companyUser: companyreducer },
});

export default store;
