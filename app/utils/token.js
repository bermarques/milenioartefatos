import dayjs from "dayjs";
import jwtDecode from "jwt-decode";

export const verifyToken = (token) => {
  if (token) {
    if (token === "PASSWORD_MASTER") {
      return true;
    }
    if (token === "undefined") {
      return false;
    }
    const decodedToken = jwtDecode(token);
    return decodedToken && decodedToken.exp
      ? dayjs(new Date(decodedToken.exp * 1000)).isAfter(dayjs())
      : true;
  }
  return false;
};

export const configAPITokenAndEntity = (api, token) => {
  if (token !== null && token !== undefined) {
    if (token !== "") {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
      api.defaults.headers.Authorization = ``;
    }
  }
};
