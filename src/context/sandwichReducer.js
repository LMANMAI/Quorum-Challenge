import { SET_COUNT, SET_TOTAL } from "../types";

export default (state, action) => {
  switch (action.payload) {
    case SET_COUNT:
      return {
        ...state,
        //count: state.count + 1,
      };
    default:
      return {
        ...state,
      };
  }
};
