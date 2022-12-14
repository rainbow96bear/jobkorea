import { configureStore, combineReducers } from "@reduxjs/toolkit";

import BeforeLogInContainer from "../components/main/main/BeforeLogIn/BeforeLogInContainer";

const rootReducer = combineReducers({
  loggedState: BeforeLogInContainer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
