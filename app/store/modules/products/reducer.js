import { produce } from "immer";
import types from "./types";

const INITIAL_STATE = { products: [], loadingProducts: false };

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET:
      return produce(state, (draft) => {
        draft.products = [];
        draft.loadingProducts = true;
      });
    case types.GET_SUCCESS:
      return produce(state, (draft) => {
        draft.products = action.products;
        draft.loadingProducts = false;
      });
    case types.GET_ERROR:
      return produce(state, (draft) => {
        draft.loadingProducts = false;
      });
    case types.CLEAN_CACHE_PRODUCTS:
      return produce(state, (draft) => {
        draft.loadingProducts = false;
      });

    default:
      return state;
  }
}
