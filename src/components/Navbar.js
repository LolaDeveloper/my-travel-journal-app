import React from "react";
import "./Navbar.css";
import Japan from "../images/japan.png";

export default function Navbar() {
  return (
    <nav>
      <div>
        <h1>
          <img src={Japan} className="img-fluid" /> Travelling Japan{" "}
          <img src={Japan} className="img-fluid" />
        </h1>
        <h3>My travel photo diary</h3>
      </div>
    </nav>
  );
}
