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
    // logic for total distance computtaion
    data.data.tripDetails.forEach((element) => {
      let total = 0;
      element.tripLists.forEach((x) => {
        total = total + parseFloat(x.totalKm);
        element.totalDistance = total;
      });
    });
    // logic for total expense computtaion
    data.data.tripDetails.forEach((element) => {
      let te = 0;
      element.tripLists.forEach((x) => {
        x.tripExpenses.forEach((z) => {
          te = te + z.amount;
          element.totaltripExpenses = te;
        });
      });
    });

    // logic for trip expense computtaion
    data.data.tripDetails.forEach((element) => {
      element.tripLists.forEach((x) => {
        let tte = 0;
        x.tripExpenses.forEach((z) => {
          tte = tte + z.amount;
          x.nettripExpenses = tte;
        });
      });
    });

    dispatch({ type: GET_DATA, payload: data.data });
  } catch (error) {
    dispatch({ type: GET_DATA_FAILED, payload: error.message });
  }
};

export { getData };
