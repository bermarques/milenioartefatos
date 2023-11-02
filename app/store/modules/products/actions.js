import types from "./types";

export const getProducts = () => ({
  type: types.GET_PRODUCTS,
});

export const createProduct = (data, file) => ({
  type: types.CREATE_PRODUCT,
  payload: { data, file },
});

export const deleteProduct = (product) => ({
  type: types.DELETE_PRODUCT,
  payload: { product },
});

export const getDetails = (id) => ({
  type: types.GET_PRODUCT_DETAIL,
  payload: { id },
});

export const cleanCacheProducts = () => ({ type: types.CLEAN_CACHE_PRODUCTS });
