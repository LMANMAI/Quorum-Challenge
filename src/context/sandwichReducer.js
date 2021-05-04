import { SET_COUNT, SET_TOTAL, RESTART } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case SET_TOTAL:
      return {
        ...state,
         total: parseFloat(state.total) + parseFloat(action.payload),
      };
    case RESTART:
      return {
        ...state,
        total: 0,
      };
    default:
      return {
        ...state,
      };
  }
};
