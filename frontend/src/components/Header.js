import React from "react";
import searchIcon from "../../src/searchicon.png";
export default function Header(props) {
  const handleClick = () => {
    alert("Search Performed !!");
  };

  const onExport = () => {
    alert("Export Performed !!");
  };

  return (
    <div className="header">
      <div className="header-one">
        <div
          style={{
            display: "inline-block",
            width: "20%",
            marginTop: "20px",
            fontSize: "30px",
          }}
        >
          Trip Summary
          <div style={{ fontSize: "12px" }}>Dashboard / Trip Summary</div>
        </div>
        <div
          style={{ float: "right", display: "inline-block", marginTop: "18px" }}
        >
          <label for="birthday">From</label>
          <input type="date" id="fromdate" name="fromdate" />
          <label for="birthday">To</label>
          <input type="date" id="todate" name="todate" />

          <img src={searchIcon} alt="logo" onClick={handleClick} />
          <button style={{ border: "1px solid blue" }} onClick={onExport}>
            Export
          </button>
        </div>
      </div>
      <div className="header-two">
        <div style={{ width: "70%", height: "100px" }}>
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "30%",
                height: "40px",
                display: "inline-block",
                backgroundColor: "aqua",
              }}
            >
              {" "}
              <div
                style={{
                  color: "white",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                {props.vehicleNo}
              </div>
            </div>
            <div
              style={{
                width: "30%",
                height: "40px",
                marginLeft: "40px",
                display: "inline-block",
                backgroundColor: "goldenrod",
              }}
            >
              <div
                style={{
                  color: "white",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                Total Trips : {props.totalTrips}
              </div>
            </div>
            <div
              style={{
                width: "30%",
                height: "40px",
                display: "inline-block",
                backgroundColor: "darkblue",
                marginLeft: "40px",
              }}
            >
              <div
                style={{
                  color: "white",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                Total KM : {props.totalKm}
              </div>
            </div>
          </div>
          <div style={{ position: "relative", marginTop: "15px" }}>
            <div
              style={{
                width: "30%",
                height: "40px",
                display: "inline-block",
                backgroundColor: "limegreen",
              }}
            >
              {" "}
              <div
                style={{
                  color: "white",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                Trip Time : {props.totalTripTime}
              </div>
            </div>
            <div
              style={{
                width: "30%",
                height: "40px",
                marginLeft: "40px",
                display: "inline-block",
                backgroundColor: "mediumorchid",
              }}
            >
              {" "}
              <div
                style={{
                  color: "white",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                Total Time : {props.totalTime}
              </div>
            </div>
            <div
              style={{
                width: "30%",
                height: "40px",
                display: "inline-block",
                backgroundColor: "darkgoldenrod",
                marginLeft: "40px",
              }}
            >
              {" "}
              <div
                style={{
                  color: "white",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                Total Exp : Rs {props.totalExpences}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "20%",
            height: "100px",
            float: "right",
            marginTop: "-102px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <div style={{ marginLeft: "20px", marginTop: "40px" }}>
            Other Exp : Rs {props.otherExpenses}
          </div>
        </div>
      </div>
    </div>
  );
}
