import { GET_DATA } from "../constant/constant";

function dataReducer(state = { gridData: [] }, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        gridData: action.payload,
      };

    default:
      return state;
  }
}

export { dataReducer };
