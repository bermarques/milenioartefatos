import types from "./types";

export const login = (data) => ({
  type: types.LOGIN,
  payload: data,
});

export const registerEmail = (email) => ({
  type: types.EMAIL,
  payload: email,
});

export const cleanCacheAuth = () => ({ type: types.CLEAN_CACHE_AUTH });
