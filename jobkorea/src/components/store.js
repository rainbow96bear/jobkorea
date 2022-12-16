import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as userInfoReducer } from "./userInfo";

const store = createStore(
  combineReducers({
    userInfo: userInfoReducer,
  }),
  composeWithDevTools()
);

export default store;
