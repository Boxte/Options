import { combineReducers, configureStore } from "@reduxjs/toolkit";
import textReducer from "../reducers/textReducer";

let reducers = combineReducers({
  textReducer,
});

let store = configureStore({ reducer: reducers });

export default store;
