import { SET_COUNT, SET_TOTAL, SET_PURCHASE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        //count: state.count + 1,
      };
    case SET_TOTAL:
      return {
        ...state,
        // count: state.count + 1,
      };
    case SET_PURCHASE:
      return {
        // ...state,
        // sandwich: [...state.sandwich, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};
