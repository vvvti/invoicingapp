import { combineReducers } from "redux";
import invoices from "./invoices";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  invoices,
  errors,
  messages,
  auth
});
