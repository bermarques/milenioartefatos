import api from "../../../services/api";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { LOGIN_ROUTE } from "./routes";
import types from "./types";
import { notification } from "antd";
import { configAPITokenAndEntity } from "app/utils/token";

function* fetchLogin({ payload }) {
  try {
    const res = yield call(api.post, LOGIN_ROUTE, payload);

    yield put({ type: types.LOGIN_SUCCESS, token: res?.data?.token });
    configAPITokenAndEntity(api, res?.data?.token);
  } catch (error) {
    yield put({ type: types.LOGIN_ERROR });
    const errorMessage = error?.response?.data?.message;
    notification.open({
      message: errorMessage,
    });
  }
}

export default all([takeLatest(types.LOGIN, fetchLogin)]);
