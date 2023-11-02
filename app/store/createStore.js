import { createStore, applyMiddleware, compose, Middleware } from "redux";
import thunk from "redux-thunk";
import persistReducers from "./persistReducers";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

export default (reducers, middlewares) => {
  const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

  return createStore(reducers, composeEnhancers);
};
