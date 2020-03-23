import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_INVOICES, DELETE_INVOICE, ADD_INVOICE } from "./types";

//get invoices
export const getInvoices = () => (dispatch, getState) => {
  axios
    .get("/api/invoice/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_INVOICES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
//delete invoice
export const deleteInvoice = id => (dispatch, getState) => {
  axios
    .delete(`/api/invoice/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteInvoice: "Invoice Deleted" }));
      dispatch({
        type: DELETE_INVOICE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
//add invoice
export const addInvoice = invoice => (dispatch, getState) => {
  axios
    .post("/api/invoice/", invoice, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addInvoice: "Invoice added" }));
      dispatch({
        type: ADD_INVOICE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
