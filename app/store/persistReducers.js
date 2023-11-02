import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "milenio",
      storage,
      whitelist: ["products, auth, admin"],
      blacklist: [],
      transforms: [],
    },
    reducers
  );

  return persistedReducer;
};
