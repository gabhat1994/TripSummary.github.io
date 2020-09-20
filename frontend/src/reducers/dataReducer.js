import { GET_DATA, GET_DATA_FAILED } from "../constant/constant";

function dataReducer(state = { data: {} }, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case GET_DATA_FAILED:
      return {
        ...state,
        gridData: action.payload,
      };

    default:
      return state;
  }
}

export { dataReducer };
