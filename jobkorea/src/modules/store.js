import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage"
import storageSession from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { companyreducer } from "./userInfo";
import logger from "redux-logger";
const middleWares = [logger];

const reducers = combineReducers({ companyUser: companyreducer });

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["companyUser"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: { companyUser: companyreducer },
  middleware: middleWares,
});

export default store;
