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
          >Total KM </div>
          <div
            className="collapse-header-button"
            style={{ display: "inline-block" }}
          >
            <button onClick={handleToggle}></button>
          </div>
        </div>
        {show && (
          <div
            className="collapse-expansion"
            style={{ border: "1px solid red" }}
          >
            <div
              className="collapse-table"
              style={{ border: "1px solid red" }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}
