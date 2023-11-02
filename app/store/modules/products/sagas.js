import api from "../../../services/api";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { CREATE_PRODUCT_ROUTE, DELETE_PRODUCT_ROUTE } from "./routes";
import types from "./types";
import { uploadFile } from "app/utils/uploadFiles";
import { utapi } from "uploadthing/server";
import { getProducts } from "./actions";

export function* fetchProducts() {
  try {
    const res = yield call(api.get, CREATE_PRODUCT_ROUTE);

    yield put({ type: types.GET_PRODUCTS_SUCCESS, products: res.data });
  } catch (error) {
    yield put({ type: types.GET_PRODUCTS_ERROR });
  }
}
export function* fetchCreateProduct({ payload }) {
  try {
    const { data, file } = payload;
    const uploadedFile = yield uploadFile(file);

    const res = yield call(api.post, CREATE_PRODUCT_ROUTE, {
      ...data,
      image: uploadedFile[0]?.key,
      inStock: !!data.inStock,
    });
    yield put({
      type: types.CREATE_PRODUCT_SUCCESS,
      products: res.data,
    });
    yield put(getProducts());
  } catch (error) {
    yield put({ type: types.CREATE_PRODUCT_ERROR });
  }
}
export function* fetchDeleteProduct({ payload }) {
  try {
    const { product } = payload;
    const res = yield call(api.delete, `${DELETE_PRODUCT_ROUTE}${product.id}`);
    yield put({
      type: types.DELETE_PRODUCT_SUCCESS,
    });
    yield put(getProducts());
  } catch (error) {
    yield put({ type: types.DELETE_PRODUCT_ERROR });
  }
}

export default all([
  takeLatest(types.GET_PRODUCTS, fetchProducts),
  takeLatest(types.CREATE_PRODUCT, fetchCreateProduct),
  takeLatest(types.DELETE_PRODUCT, fetchDeleteProduct),
]);
