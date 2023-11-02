import types from "./types";

export const getBanners = () => ({
  type: types.GET_BANNER,
});

export const addBanner = (file) => ({
  type: types.ADD_BANNER,
  payload: { file },
});

export const removeBanner = (id) => ({
  type: types.REMOVE_BANNER,
  payload: { id },
});

export const cleanCacheProducts = () => ({ type: types.CLEAN_CACHE_PRODUCTS });
