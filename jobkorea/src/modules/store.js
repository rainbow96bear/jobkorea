import { configureStore } from "@reduxjs/toolkit";
import { buttonreducer } from "./button";
import { recruitreducer } from "./recruit";
import { companyreducer } from "./userInfo";

const store = configureStore({
  reducer: {
    companyUser: companyreducer,
    button: buttonreducer,
    recruit: recruitreducer,
  },
});

export default store;
