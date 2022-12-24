import { configureStore } from "@reduxjs/toolkit";
import { buttonreducer } from "./button";
import { companyreducer } from "./userInfo";

const store = configureStore({
  reducer: { companyUser: companyreducer, button: buttonreducer },
});

export default store;
