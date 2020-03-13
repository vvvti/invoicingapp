import { GET_INVOICES, DELETE_INVOICE } from "../actions/types.js";

const initialState = {
  invoices: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INVOICES:
      return {
        ...state,
        invoices: action.payload
      };
    case DELETE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.filter(
          invoice => invoice.id !== action.payload
        )
      };

    default:
      return state;
  }
}
