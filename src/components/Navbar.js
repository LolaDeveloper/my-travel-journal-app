import React from "react";
import "./Navbar.css";
import Japan from "../images/japan.png";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navcontent">
        <h1>
          <img src={Japan} className="img-fluid flag" alt="flag of Japan" />{" "}
          Travelling Japan{" "}
          <img src={Japan} className="img-fluid flag" alt="flag of Japan" />
        </h1>
        <h3>My travel photo diary</h3>
      </div>
    </nav>
  );
}
