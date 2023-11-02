import { all } from "redux-saga/effects";
import products from "./products/sagas";
import auth from "./auth/sagas";

export default function* rootSaga() {
  return yield all([products, auth]);
}
