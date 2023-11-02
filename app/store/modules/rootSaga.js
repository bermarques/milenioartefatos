import { all } from "redux-saga/effects";
import products from "./products/sagas";
import auth from "./auth/sagas";
import admin from "./admin/sagas";

export default function* rootSaga() {
  return yield all([products, auth, admin]);
}
