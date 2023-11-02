import api from "../../../services/api";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_ROUTE } from "./routes";
import types from "./types";
import { notification } from "antd";

export function* fetchLogin({ payload }) {
  try {
    const res = yield call(api.post, LOGIN_ROUTE, payload);

    yield put({ type: types.LOGIN_SUCCESS, token: res?.data?.token });
    return;
  } catch (error) {
    yield put({ type: types.LOGIN_ERROR });
    const errorMessage = error?.response?.data?.message;
    errorMessage &&
      notification.open({
        message: errorMessage,
      });
  }
}

export default all([takeLatest(types.LOGIN, fetchLogin)]);
