import axios from "axios";

import { GET_CONTRACTORS } from "./types";

//Get contractors
export const getContractors = () => dispatch => {
  axios
    .get("api/contractor/")
    .then(res => {
      dispatch({
        type: GET_CONTRACTORS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
