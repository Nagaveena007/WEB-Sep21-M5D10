import { initialState } from "../store/index.js";
import { FETCH_DATA_WITH_ID, GET_ALL_DETAILS } from "../actions";
const homeReducer = (state = initialState.mainHomeContent, action) => {
  switch (action.type) {
    case FETCH_DATA_WITH_ID:
      return {
        ...state,
        album: action.payload,
      };
    case GET_ALL_DETAILS:
      return {
        ...state,

        content: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
