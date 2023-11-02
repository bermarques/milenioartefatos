import products from "./products/reducer";
import auth from "./auth/reducer";
import { combineReducers } from "redux";

export default combineReducers({
  products,
  auth,
});
