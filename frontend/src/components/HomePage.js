import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { getData } from "../actions/action";
import Collapsable from "./Collapsable";

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const dataReducer = useSelector((state) => state.dataReducer);
  const { data } = dataReducer;

  return (
    <div>
      <Header
        vehicleNo={data.vehicleNo}
        totalTrips={data.totalTrips}
        totalKm={data.totalKm}
        totalTripTime={data.totalTripTime}
        totalTime={data.totalTime}
        totalExpences={data.totalExpences}
        otherExpenses={data.otherExpenses}
      />

      <Collapsable />
    </div>
  );
}
