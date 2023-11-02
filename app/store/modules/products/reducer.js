import { produce } from "immer";
import types from "./types";

const INITIAL_STATE = {
  products: [],
  loadingProducts: false,
  loadingCreateProducts: false,
  successCreateProducts: false,
  loadingDetails: false,
  successDetails: false,
  loadingDelete: false,
  successDelete: false,
  productDetails: undefined,
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return produce(state, (draft) => {
        draft.products = [];
        draft.loadingProducts = true;
      });
    case types.GET_PRODUCTS_SUCCESS:
      return produce(state, (draft) => {
        draft.products = action.products;
        draft.loadingProducts = false;
      });
    case types.GET_PRODUCTS_ERROR:
      return produce(state, (draft) => {
        draft.loadingProducts = false;
      });
    case types.CREATE_PRODUCT:
      return produce(state, (draft) => {
        draft.loadingCreateProducts = true;
        draft.successCreateProducts = false;
      });
    case types.CREATE_PRODUCT_SUCCESS:
      return produce(state, (draft) => {
        draft.loadingCreateProducts = false;
        draft.successCreateProducts = true;
      });
    case types.CREATE_PRODUCT_ERROR:
      return produce(state, (draft) => {
        draft.loadingCreateProducts = false;
        draft.successCreateProducts = false;
      });
    case types.GET_PRODUCT_DETAIL:
      return produce(state, (draft) => {
        draft.loadingDetails = true;
        draft.successDetails = false;
        draft.productDetails = undefined;
      });
    case types.GET_PRODUCT_DETAIL_SUCCESS:
      return produce(state, (draft) => {
        draft.loadingDetails = false;
        draft.successDetails = false;
        draft.productDetails = action.product;
      });
    case types.GET_PRODUCT_DETAIL_ERROR:
      return produce(state, (draft) => {
        draft.loadingDetails = false;
        draft.successDetails = false;
        draft.productDetails = undefined;
      });
    case types.DELETE_PRODUCT:
      return produce(state, (draft) => {
        draft.loadingDelete = true;
        draft.successDelete = false;
      });
    case types.DELETE_PRODUCT_SUCCESS:
      return produce(state, (draft) => {
        draft.products = action.products;
        draft.loadingDelete = false;
        draft.successDelete = true;
      });
    case types.DELETE_PRODUCT_ERROR:
      return produce(state, (draft) => {
        draft.loadingDelete = false;
        draft.successDelete = false;
      });
    case types.CLEAN_CACHE_PRODUCTS:
      return produce(state, (draft) => {
        draft.loadingProducts = false;
        draft.loadingDelete = false;
        draft.successDelete = false;
        draft.loadingCreateProducts = false;
        draft.successCreateProducts = false;
        draft.productDetails = undefined;
      });

    default:
      return state;
  }
}
