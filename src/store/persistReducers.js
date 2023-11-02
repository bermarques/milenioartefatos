import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "controlle",
      storage,
      whitelist: ["products"],
      blacklist: [],
      transforms: [],
    },
    reducers
  );

  return persistedReducer;
};
