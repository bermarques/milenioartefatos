import api from "../../../services/api";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { CREATE_PRODUCT_ROUTE, DELETE_PRODUCT_ROUTE } from "./routes";
import types from "./types";
import { uploadFile } from "app/utils/uploadFiles";
import { utapi } from "uploadthing/server";
import { getProducts } from "./actions";

export function* fetchProducts({ payload }) {
  try {
    const res = yield call(api.get, CREATE_PRODUCT_ROUTE, { params: payload });

    yield put({
      type: types.GET_PRODUCTS_SUCCESS,
      products: res.data.results,
      total: res.data.total,
    });
  } catch (error) {
    yield put({ type: types.GET_PRODUCTS_ERROR });
  }
}
export function* fetchProductsSearchbar({ payload }) {
  try {
    const { name } = payload;

    const res = yield call(api.get, CREATE_PRODUCT_ROUTE, {
      params: { name: name, pageSize: 3, page: 1 },
    });

    yield put({
      type: types.SEARCH_BAR_PRODUCT_SUCCESS,
      products: res.data.results,
    });
  } catch (error) {
    yield put({ type: types.SEARCH_BAR_PRODUCT_ERROR });
  }
}
export function* fetchCreateProduct({ payload }) {
  try {
    const { data, file, category } = payload;
    const uploadedFile = yield uploadFile(file);

    const res = yield call(api.post, CREATE_PRODUCT_ROUTE, {
      ...data,
      image: uploadedFile[0]?.key,
      inStock: !!data.inStock,
      category: Number(category),
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

export function* fetchEditProduct({ payload }) {
  try {
    const { data, file, category, id } = payload;
    if (typeof file === "string") {
      const splitedFile = file.split("/");
      const uploadedFile = splitedFile[splitedFile.length - 1];
      const res = yield call(api.patch, `${CREATE_PRODUCT_ROUTE}/${id}`, {
        ...data,
        image: uploadedFile,
        inStock: !!data.inStock,
        category: Number(category),
      });
      yield put({
        type: types.EDIT_PRODUCT_SUCCESS,
        products: res.data,
      });
      yield put(getProducts(undefined, undefined, 10, Number(category)));
    } else {
      const uploadedFile = yield uploadFile(file);

      const res = yield call(api.patch, `${CREATE_PRODUCT_ROUTE}/${id}`, {
        ...data,
        image: uploadedFile[0].key,
        inStock: !!data.inStock,
        category: Number(category),
      });
      yield put({
        type: types.EDIT_PRODUCT_SUCCESS,
        products: res.data,
      });
      yield put(getProducts(undefined, undefined, 10, Number(category)));
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.EDIT_PRODUCT_ERROR });
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
export function* fetchDetails({ payload }) {
  try {
    const { id } = payload;
    const res = yield call(api.get, `${CREATE_PRODUCT_ROUTE}/${id}`);
    yield put({
      type: types.GET_PRODUCT_DETAIL_SUCCESS,
      product: res.data,
    });
  } catch (error) {
    yield put({ type: types.GET_PRODUCT_DETAIL_ERROR });
  }
}

export default all([
  takeLatest(types.GET_PRODUCTS, fetchProducts),
  takeLatest(types.CREATE_PRODUCT, fetchCreateProduct),
  takeLatest(types.DELETE_PRODUCT, fetchDeleteProduct),
  takeLatest(types.GET_PRODUCT_DETAIL, fetchDetails),
  takeLatest(types.SEARCH_BAR_PRODUCT, fetchProductsSearchbar),
  takeLatest(types.EDIT_PRODUCT, fetchEditProduct),
]);
