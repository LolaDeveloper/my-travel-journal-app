import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="Container">
      <div className="ImageWrapper">
        <div className="CardImage">
          <img
            src={`../images/${props.coverImage}`}
            alt={`This is ${props.title}`}
          />
        </div>
      </div>
      <div className="CardInfo">
        <span>
          <img
            src="../images/location-pin.png"
            alt="location marker"
            className="location-pin"
          />{" "}
          {props.location}{" "}
        </span>
        <a
          className="google-maps-url"
          target="_blank"
          rel="noreferrer"
          href={props.googleMapsUrl}
        >
          View on Google Maps
        </a>
        <h2>{props.title} </h2>
        <h5>{props.dateVisited}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
