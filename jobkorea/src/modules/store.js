import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { companyreducer } from "./userInfo";

const reducers = combineReducers({ companyUser: companyreducer });

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["companyUser"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
