import React from "react";
import Grid from "../images/photo-grid.jpg";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="Hero">
      <div>
        <h1> Discover Japan with me</h1>
        <img
          src={Grid}
          className="img-fluid hero--photo"
          alt="grid of places visited in Japan"
        />
      </div>
      <div>
        <button>Start discovering</button>
      </div>
    </section>
  );
}
