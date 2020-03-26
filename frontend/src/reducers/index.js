import { combineReducers } from "redux";
import invoices from "./invoices";
import contractors from "./contractors";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  invoices,
  contractors,
  errors,
  messages,
  auth
});
