import { GET_INVOICES } from "../actions/types.js";

const initialState = {
  invoices: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        invoices: action.payload
      };
    default:
      return state;
  }
}
