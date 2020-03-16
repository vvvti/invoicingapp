import { CREATE_MESSAGE, GET_ERRORS } from "./types";

export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};

//errors return
export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  };
};
