import React, { useState } from "react";

export default function Collapsable() {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    if (show == false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <div>
      <div className="collapse">
        <div className="collapse-header">
          <div
            className="collapse-header-date"
            style={{ display: "inline-block" }}
          >
            Date :
          </div>
          <div
            className="collapse-header-total"
            style={{ display: "inline-block" }}
          >
            Total KM{" "}
          </div>
          <div
            className="collapse-header-button"
            style={{ display: "inline-block" }}
          >
            <button
              style={{ float: "right", marginTop: "15px" }}
              onClick={handleToggle}
            ></button>
          </div>
        </div>
        {show && (
          <div className="collapse-expansion">
            <div className="collapse-table" style={{ border: "1px solid red" }}>
              <table>
                <tr style={{ backgroundColor: "#3090C7", color: "white" }}>
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
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
