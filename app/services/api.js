import axios from "axios";
import { URL_API } from "../consts/config";

const api = axios.create({
  baseURL: String(URL_API),
  headers: {
    "content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    "Access-Control-Allow-Methods": "POST,GET,OPTIONS,PUT,DELETE",
  },
});
export default api;
