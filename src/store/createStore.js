import { createStore, applyMiddleware, compose, Middleware } from "redux";
import thunk from "redux-thunk";
import persistReducers from "./persistReducers";

export default (reducers, middlewares) => {
  const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.({
        trace: false,
        traceLimit: 25,
      })) ||
    compose;
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares.concat(thunk))
  );
  return createStore(reducers, enhancer);
};
