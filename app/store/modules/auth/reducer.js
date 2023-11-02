import { produce } from "immer";
import types from "./types";

const INITIAL_STATE = { loadingLogin: false, token: undefined };

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN:
      return produce(state, (draft) => {
        draft.loadingLogin = true;
      });
    case types.LOGIN_SUCCESS:
      return produce(state, (draft) => {
        draft.loadingLogin = false;
        draft.token = action.token;
        sessionStorage.setItem("token", action.token);
      });
    case types.LOGIN_ERROR:
      return produce(state, (draft) => {
        draft.loadingLogin = false;
      });
    case types.CLEAN_CACHE_AUTH:
      return produce(state, (draft) => {
        draft.loadingLogin = false;
      });

    default:
      return state;
  }
}
