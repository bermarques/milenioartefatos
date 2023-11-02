import { produce } from "immer";
import types from "./types";

const INITIAL_STATE = {
  products: [],
  dashboard: undefined,
  loadingDashboard: false,
  successDashboard: false,
  searchbarProducts: [],
  totalProducts: 1,
  loadingSearchbarProducts: false,
  searchbarProductsSuccess: false,
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
        draft.totalProducts = action.total;
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
    case types.EDIT_PRODUCT:
      return produce(state, (draft) => {
        draft.loadingCreateProducts = true;
        draft.successCreateProducts = false;
      });
    case types.EDIT_PRODUCT_SUCCESS:
      return produce(state, (draft) => {
        draft.loadingCreateProducts = false;
        draft.successCreateProducts = true;
      });
    case types.EDIT_PRODUCT_ERROR:
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
    case types.SEARCH_BAR_PRODUCT:
      return produce(state, (draft) => {
        draft.loadingSearchbarProducts = true;
        draft.searchbarProductsSuccess = false;
      });
    case types.SEARCH_BAR_PRODUCT_SUCCESS:
      return produce(state, (draft) => {
        draft.searchbarProducts = action.products;
        draft.loadingSearchbarProducts = false;
        draft.searchbarProductsSuccess = true;
      });
    case types.SEARCH_BAR_PRODUCT_ERROR:
      return produce(state, (draft) => {
        draft.loadingSearchbarProducts = false;
        draft.searchbarProductsSuccess = false;
      });
    case types.GET_DASHBOARD_PRODUCTS:
      return produce(state, (draft) => {
        draft.loadingDashboard = true;
        draft.successDashboard = false;
      });
    case types.GET_DASHBOARD_PRODUCTS_SUCCESS:
      return produce(state, (draft) => {
        draft.dashboard = action.data;
        draft.loadingDashboard = false;
        draft.successDashboard = true;
      });
    case types.GET_DASHBOARD_PRODUCTS_ERROR:
      return produce(state, (draft) => {
        draft.loadingDashboard = false;
        draft.successDashboard = false;
      });
    case types.CLEAN_CACHE_PRODUCTS:
      return produce(state, (draft) => {
        draft.loadingProducts = false;
        draft.loadingDelete = false;
        draft.successDelete = false;
        draft.loadingCreateProducts = false;
        draft.successCreateProducts = false;
        draft.loadingSearchbarProducts = false;
        draft.searchbarProductsSuccess = false;
        draft.productDetails = undefined;
      });

    default:
      return state;
  }
}
