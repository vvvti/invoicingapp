import { combineReducers } from "redux";
import invoices from "./invoices";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  invoices,
  errors,
  messages
});
