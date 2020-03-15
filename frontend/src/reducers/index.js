import { combineReducers } from "redux";
import invoices from "./invoices";
import errors from "./errors";

export default combineReducers({
  invoices,
  errors
});
