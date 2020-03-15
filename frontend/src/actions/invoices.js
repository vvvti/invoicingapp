import axios from "axios";

import { GET_INVOICES, DELETE_INVOICE, ADD_INVOICE, GET_ERRORS } from "./types";

//get invoices
export const getInvoices = () => dispatch => {
  axios
    .get("/api/invoice/")
    .then(res => {
      dispatch({
        type: GET_INVOICES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
//delete invoice
export const deleteInvoice = id => dispatch => {
  axios
    .delete(`/api/invoice/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_INVOICE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
//add invoice
export const addInvoice = invoice => dispatch => {
  axios
    .post("/api/invoice/", invoice)
    .then(res => {
      dispatch({
        type: ADD_INVOICE,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
