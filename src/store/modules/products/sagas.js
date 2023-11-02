import api from "../../../services/api";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { CREATE_PRODUCT_ROUTE } from "./routes";
import types from "./types";

export function* fetchProducts() {
  try {
    const res = yield* call(api.get, CREATE_PRODUCT_ROUTE);

    yield put({ type: types.CREATE_PRODUCT_SUCCESS, products: res.data });
  } catch (error) {
    yield put({ type: types.CREATE_PRODUCT_ERROR });
  }
}
export function* fetchCreateProduct({ payload }) {
  try {
    const { data } = payload;
    const res = yield* call(api.post, CREATE_PRODUCT_ROUTE, data);

    yield put({ type: types.CREATE_PRODUCT_SUCCESS, products: res.data });
  } catch (error) {
    yield put({ type: types.CREATE_PRODUCT_ERROR });
  }
}

export default all([
  takeLatest(types.GET_PRODUCTS, fetchProducts),
  takeLatest(types.CREATE_PRODUCT, fetchCreateProduct),
]);
