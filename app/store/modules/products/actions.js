import types from "./types";

export const getProducts = (name, page = 1, pageSize = 3, category) => ({
  type: types.GET_PRODUCTS,
  payload: { name, page, pageSize, category },
});

export const getSearchbarProducts = (name) => ({
  type: types.SEARCH_BAR_PRODUCT,
  payload: { name },
});

export const createProduct = (data, file, category) => ({
  type: types.CREATE_PRODUCT,
  payload: { data, file, category },
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
