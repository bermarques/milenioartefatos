import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import persistReducers from "./persistReducers";
import createStore from "./createStore";

import appReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
import { setupListeners } from "@reduxjs/toolkit/query";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
setupListeners(store.dispatch);

export { store, persistor };
