import products from "./products/reducer";
import auth from "./auth/reducer";
import admin from "./admin/reducer";
import { combineReducers } from "redux";

export default combineReducers({
  products,
  auth,
  admin,
});
