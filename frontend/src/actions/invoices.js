import axios from "axios";

import { GET_INVOICES, DELETE_INVOICE } from "./types";

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
