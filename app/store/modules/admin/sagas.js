import api from "../../../services/api";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_PRODUCT_ROUTE,
  DELETE_PRODUCT_ROUTE,
  GET_BANNERS_ROUTE,
} from "./routes";
import types from "./types";
import { uploadFile } from "app/utils/uploadFiles";
import { utapi } from "uploadthing/server";
import { getBanners, getProducts } from "./actions";
import { getValuesToServer } from "./rules";

export function* fetchBanners({ payload }) {
  try {
    const res = yield call(api.get, GET_BANNERS_ROUTE);

    console.log(res.data);

    yield put({
      type: types.GET_BANNER_SUCCESS,
      banners: res.data,
    });
  } catch (error) {
    yield put({ type: types.GET_BANNER_ERROR });
  }
}

export function* fetchAddBanner({ payload }) {
  try {
    console.log(1);
    const { file } = payload;
    console.log(file);
    const uploadedFile = yield uploadFile(file);

    const res = yield call(api.post, GET_BANNERS_ROUTE, {
      url: uploadedFile[0].key,
    });
    yield put({
      type: types.ADD_BANNER_SUCCESS,
    });
    yield put(getBanners());
  } catch (error) {
    console.log(error);
    yield put({ type: types.ADD_BANNER_ERROR });
  }
}
export function* fetchRemoveBanner({ payload }) {
  try {
    const { id } = payload;

    const res = yield call(api.delete, `${GET_BANNERS_ROUTE}/${id}`);
    yield put({
      type: types.REMOVE_BANNER_SUCCESS,
    });
  } catch (error) {
    yield put({ type: types.REMOVE_BANNER_ERROR });
  }
}

export default all([
  takeLatest(types.GET_BANNER, fetchBanners),
  takeLatest(types.ADD_BANNER, fetchAddBanner),
  takeLatest(types.REMOVE_BANNER, fetchRemoveBanner),
]);
