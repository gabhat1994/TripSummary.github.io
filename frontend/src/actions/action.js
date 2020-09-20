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

    data.data.tripDetails.forEach((element) => {
      let total = 0
      element.tripLists.forEach((x) => {
         total = total + parseFloat(x.totalKm);
        element.totalDistance = total;
      });
    });

  


   

    //   data.data.tripDetails[0].totalTripsExpense =
    //   parseFloat(data.data.tripDetails[0].tripLists[0].totalKm) +
    //   parseFloat(data.data.tripDetails[0].tripLists[1].totalKm);

    // data.data.tripDetails[1].totalTripsExpense =
    //   parseFloat(data.data.tripDetails[1].tripLists[0].totalKm) +
    //   parseFloat(data.data.tripDetails[1].tripLists[1].totalKm);

    // data.data.tripDetails[2].totalTripsExpense =
    //   parseFloat(data.data.tripDetails[2].tripLists[0].totalKm) +
    //   parseFloat(data.data.tripDetails[2].tripLists[1].totalKm);

    // data.data.tripDetails[3].totalTripsExpense =
    //   parseFloat(data.data.tripDetails[3].tripLists[0].totalKm) +
    //   parseFloat(data.data.tripDetails[3].tripLists[1].totalKm);

    // data.data.tripDetails[4].totalTripsExpense =
    //   parseFloat(data.data.tripDetails[0].tripLists[0].totalKm) +
    //   parseFloat(data.data.tripDetails[0].tripLists[1].totalKm);

    // data.data.tripDetails[5].totalTripsExpense =
    //   parseFloat(data.data.tripDetails[5].tripLists[0].totalKm) +
    //   parseFloat(data.data.tripDetails[5].tripLists[1].totalKm);

    // data.data.tripDetails[6].totalTripsExpense =
    //   parseFloat(data.data.tripDetails[6].tripLists[0].totalKm) +
    //   parseFloat(data.data.tripDetails[6].tripLists[1].totalKm);

    // data.data.tripDetails[7].totalTripsExpense =
    //   parseFloat(data.data.tripDetails[7].tripLists[0].totalKm) +
    //   parseFloat(data.data.tripDetails[7].tripLists[1].totalKm) +
    //   parseFloat(data.data.tripDetails[7].tripLists[2].totalKm);

    // data.data.tripDetails[8].totalTripsExpense =
    //   parseFloat(data.data.tripDetails[8].tripLists[0].totalKm) +
    //   parseFloat(data.data.tripDetails[8].tripLists[1].totalKm);

    // data.data.tripDetails[9].totalTripsExpense =
    //   parseFloat(data.data.tripDetails[9].tripLists[0].totalKm) +
    //   parseFloat(data.data.tripDetails[9].tripLists[1].totalKm) +
    //   parseFloat(data.data.tripDetails[9].tripLists[2].totalKm) +
    //   parseFloat(data.data.tripDetails[9].tripLists[3].totalKm);

    dispatch({ type: GET_DATA, payload: data.data });
  } catch (error) {
    dispatch({ type: GET_DATA_FAILED, payload: error.message });
  }
};

export { getData };
