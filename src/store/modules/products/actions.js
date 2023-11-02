import types from "./types";

export const getProducts = () => ({
  type: types.GET_PRODUCTS,
});

export const createProduct = (data) => ({
  type: types.CREATE_PRODUCT,
  payload: data,
});

export const cleanCacheProducts = () => ({ type: types.CLEAN_CACHE_PRODUCTS });
