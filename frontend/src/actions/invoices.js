import axios from "axios";

import { GET_INVOICES } from "./types";

// GET INOICES
export const getInvoices = () => dispatch => {
  axios
    .get("/api/invoices/")
    .then(res => {
      dispatch({
        type: GET_INVOICES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
