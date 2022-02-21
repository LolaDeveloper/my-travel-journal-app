import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navcontent">
        <h1>
          <img
            src="../images/japan.png"
            className="img-fluid flag"
            alt="flag of Japan"
          />{" "}
          Travelling Japan{" "}
          <img
            src="../images/japan.png"
            className="img-fluid flag"
            alt="flag of Japan"
          />
        </h1>
        <h3>My travel photo diary</h3>
      </div>
    </nav>
  );
}
