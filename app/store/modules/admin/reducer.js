import { produce } from "immer";
import types from "./types";

const INITIAL_STATE = {
  banners: [],
  loadingBanners: false,
  loadingAddBanner: false,
  successAddBanner: false,
  loadingEditBanner: false,
  successEditBanner: false,
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_BANNER:
      return produce(state, (draft) => {
        draft.banners = [];
        draft.loadingBanners = true;
      });
    case types.GET_BANNER_SUCCESS:
      return produce(state, (draft) => {
        draft.banners = action.banners;
        draft.loadingBanners = false;
      });
    case types.GET_BANNER_ERROR:
      return produce(state, (draft) => {
        draft.loadingBanners = false;
      });
    case types.ADD_BANNER:
      return produce(state, (draft) => {
        draft.loadingAddBanner = true;
      });
    case types.ADD_BANNER_SUCCESS:
      return produce(state, (draft) => {
        draft.loadingAddBanner = false;
        draft.successAddBanner = true;
      });
    case types.ADD_BANNER_ERROR:
      return produce(state, (draft) => {
        draft.loadingAddBanner = false;
        draft.successAddBanner = false;
      });
    case types.EDIT_BANNER:
      return produce(state, (draft) => {
        draft.loadingCreateProducts = true;
        draft.successCreateProducts = false;
      });
    case types.EDIT_BANNER_SUCCESS:
      return produce(state, (draft) => {
        draft.loadingCreateProducts = false;
        draft.successCreateProducts = true;
      });
    case types.EDIT_BANNER_ERROR:
      return produce(state, (draft) => {
        draft.loadingCreateProducts = false;
        draft.successCreateProducts = false;
      });

    default:
      return state;
  }
}
