import React, { useState } from "react";
import arror from "../../src/arror.png";

export default function Collapsable(props) {
  const [show, setShow] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    if (show == false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  console.log(props.tripDetails, "test");
  let style = show == true ? "collapse" : "notcollapse";
  return (
    <div>
      {props.tripDetails != undefined &&
        props.tripDetails.map((trip) => {
          return (
            <div id={trip.id} className={style}>
              <div className="collapse-header">
                <div
                  className="collapse-header-date"
                  style={{ display: "inline-block" }}
                >
                  Date : {trip.startDay} - {trip.endDay}
                </div>
                <div
                  className="collapse-header-total"
                  style={{ display: "inline-block" }}
                >
                  Total KM :
                  {parseFloat(trip.tripLists[0].totalKm) +
                    parseFloat(trip.tripLists[1].totalKm)}
                </div>
                <div
                  id={trip.id}
                  className="collapse-header-button"
                  style={{ display: "inline-block" }}
                >
                  <button
                    name={trip.id}
                    id={trip.id}
                    style={{ float: "right", marginTop: "15px" }}
                    onClick={(e) => handleToggle(e)}
                  ></button>
                </div>
              </div>
              {show && (
                <div className="collapse-expansion" id={trip.id}>
                  <div className="collapse-table" id={trip.id}>
                    <table>
                      <tr
                        style={{ backgroundColor: "#3090C7", color: "white" }}
                      >
                        <th>#</th>
                        <th>Trip Starts(Node) to Trip Ends(Node)</th>
                        <th>Driver Name</th>
                        <th>Trip Expenses</th>
                        <th>Trip Km</th>
                        <th>Trip GPS km</th>
                        <th>Trip Time</th>
                        <th>Odometer Reading</th>
                        <th>Actions</th>
                      </tr>
                      {trip.tripLists.map((tripdetail) => {
                        return (
                          <tr>
                            <td>{tripdetail.tripId}</td>
                            <td>
                              {tripdetail.startPointNode}
                              <img src={arror} /> {tripdetail.endPointNode}
                            </td>
                            <td>{tripdetail.driverName}</td>
                            <td>{}</td>
                            <td>{tripdetail.totalKm}</td>
                            <td>{tripdetail.gpsDistance}</td>
                            <td>{tripdetail.tripRunningTime}</td>
                            <td>
                              {tripdetail.startODOMeter} <img src={arror} />{" "}
                              {tripdetail.endODOMeter}
                            </td>
                            <td>Actions</td>
                          </tr>
                        );
                      })}
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}
