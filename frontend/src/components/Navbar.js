import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../i.png";

export default function navbar() {
  const activeStyle = { color: "#F15B2A" };
  const openMenu = () => {};

  const handleLogout = () => {
    alert("Logout done !!");
  };
  return (
    <div className="full-width">
      <ul>
        <li>
          {" "}
          <button
            style={{
              marginTop: "10px",
              backgroundColor: "darkblue",
              border: "none",
            }}
            onClick={openMenu}
          >
            &#9776;
          </button>
        </li>

        <li style={{ marginTop: "-5px" }}>
          <NavLink to="/" activeStyle={activeStyle}>
            <img src={logo} alt="logo" />
          </NavLink>
        </li>
        <li style={{ float: "right", marginTop: "10px", marginRight: "30px" }}>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
}
