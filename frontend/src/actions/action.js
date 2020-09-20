import { GET_DATA, GET_DATA_FAILED } from "../constant/constant";
import axios from "axios";

const getData = () => async (dispatch) => {
  let postBody = {
    clientId: 10,
    dataRecord: {
      userRoleId: 4,
      userRoleName: "COMPANY",
      userId: 10,
    },
    fromDate: 1577888571659,
    toDate: 1593613371659,
    tripId: 36,
  };

  try {
    const { data } = await axios.post(
      "http://staging.watsoo.com:8080/watsoo-amazon-api//trip-controller-web/v1/vehicle/wise/summary/36",
      postBody,
      {}
    );
    dispatch({ type: GET_DATA, payload: data.data });
  } catch (error) {
    dispatch({ type: GET_DATA_FAILED, payload: error.message });
  }
};

export { getData };
