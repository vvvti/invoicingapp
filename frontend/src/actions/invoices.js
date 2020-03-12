import axios from "axios";

import { GET_INVOICES } from "./types";

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
