import { GET_CONTRACTORS } from "../actions/types";

const initialState = {
  contractors: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTRACTORS:
      return {
        ...state,
        contractors: action.payload
      };
    default:
      return state;
  }
}
